## Step 1: Get your API keys

You're on the right screen already. Click **"API Keys"** in that "Get connected" row at the bottom (or go to **Settings → API** in the left sidebar, which is currently collapsed — click the small arrow/hamburger at the top-left edge of the page to expand it).

You need two things from there:
1. **Project URL** — you already see this partially: `https://jbjvlsewyncvfsygvyfx.supabase.co`
2. **anon public key** — a long string under "Project API keys." Do **not** use the `service_role` key — that one's secret and should never go in frontend code.

## Step 2: Add them to your `.env` file

In your unzipped `campusboard` project folder, copy `.env.example` to a new file named `.env`, and fill it in:

```
VITE_SUPABASE_URL=https://jbjvlsewyncvfsygvyfx.supabase.co
VITE_SUPABASE_ANON_KEY=paste-your-anon-key-here
```

Save it. Vite automatically loads this when you run the dev server.

## Step 3: Create your database tables

In the Supabase dashboard, go to the left sidebar → **SQL Editor** → **New query**. Paste in the SQL from the README I gave you (the `profiles`, `notices`, and `notifications` tables, plus their RLS policies) and click **Run**. You should see "Success" — then check **Table Editor** in the sidebar to confirm all 3 tables show up.

## Step 4: Turn on Realtime for your tables

Sidebar → **Database → Publications**. You'll see a list of tables under a publication called `supabase_realtime`. Toggle **on** the switches for `notices` and `notifications`.

1. In the left sidebar, go to **Database** 
2. Under Database, click **Publications**.
3. You'll see a publication called `supabase_realtime` with a list of every table in your `public` schema, each with a toggle.
4. Find `notices` and `notifications` in that list and **switch their toggles on**.

## Step 5: Create the storage bucket

Sidebar → **Storage** → **New bucket** → name it exactly `avatars` → check **Public bucket** → Create. Then go to that bucket's **Policies** tab and add the 3 storage policies from the README (public read, users can upload/update their own folder).

## Step 6: Turn off email confirmation (optional, makes testing easier)

Sidebar → **Authentication → Providers** → click **Email** → toggle off "Confirm email." This way when you sign up in the app, you're logged in immediately instead of needing to click a confirmation link.

## Step 7: Run the app

```bash
cd campusboard
npm install
npm run dev
```

Open the local URL it gives you (usually `http://localhost:5173`), sign up with a test email, and you should land on the dashboard.

---


# Code Explanation of Supabase components

---

## 1. `supabaseClient.js` — the foundation everything else depends on

```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

This is the single connection point between your React app and your Supabase project. `createClient()` takes your project URL (which project) and anon key (which permission level), and returns one object — `supabase` — that every other file imports and uses to talk to the database, auth, storage, and realtime.

Emphasize: **this file is created exactly once.** Every other file just imports `{ supabase }` from here rather than creating new connections. That's why it's a good first file to show — it's the "root" of the whole integration.

The `.env` file is where the actual URL/key values live (never hardcoded in source), which is a good moment to talk about not committing secrets to git — though the anon key is designed to be public-safe since RLS is what actually protects data, not the key's secrecy.

---

## 2. `AuthContext.jsx` — session management (the Auth topic)

```javascript
useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session)
    setLoading(false)
  })

  const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session)
  })

  return () => listener.subscription.unsubscribe()
}, [])
```


1. **`getSession()`** — checks if the browser already has a valid, stored login (Supabase stores it in localStorage under the hood). This runs once on page load so refreshing the page doesn't log the user out.
2. **`onAuthStateChange()`** — a *listener* that fires automatically whenever login state changes: login, logout, token refresh. This is what keeps `session` in sync across your whole app in real time, without you manually calling anything after login.

The three auth functions defined here map directly to the three Auth CRUD-equivalents:
```javascript
const signUp = (email, password) => supabase.auth.signUp({ email, password })
const signIn = (email, password) => supabase.auth.signInWithPassword({ email, password })
const signOut = () => supabase.auth.signOut()
```

Good talking point for students: **Supabase Auth issues a JWT** (JSON Web Token) on login. That token is what gets silently attached to every future `supabase.from(...)` call, and it's what `auth.uid()` reads on the database side when checking RLS policies. So this file is the reason `auth.uid() = user_id` in your SQL policies ever has a value at all.

---

## 3. `ProtectedRoute.jsx` — Protected Routes topic

```javascript
export default function ProtectedRoute({ children }) {
  const { session, loading } = useAuth()

  if (loading) return <p className="center-text">Loading...</p>
  if (!session) return <Navigate to="/login" replace />

  return children
}
```

This has *nothing* Supabase-specific in it directly — it just reads the `session` value that `AuthContext` already tracked. This is a good moment to explain: **protected routes are a frontend UX convenience, not real security.** The actual security enforcement happens at the database level via RLS. Even if a student bypassed this component entirely, Postgres would still reject unauthorized queries. This distinction (client-side gate vs. server-side enforcement) is one of the most important backend concepts to drill in.

---

## 4. `Login.jsx` / `Signup.jsx` — calling Auth from the UI

```javascript
const { error } = await signIn(email, password)
```

```javascript
const { data, error } = await signUp(email, password)

if (data.user) {
  await supabase.from('profiles').insert({ id: data.user.id, full_name: fullName })
}
```

Every Supabase call returns the same shape: `{ data, error }`. This is worth calling out explicitly — students will see this pattern in *every single file*, so once they internalize "always check `error` first," the rest of the codebase reads consistently.

The Signup flow is also a good spot to explain the **auth.users vs. profiles** split: Supabase manages `auth.users` internally (email, password hash, etc.) — you never touch that table directly. But you can't add custom fields to it, so the standard pattern is a separate `profiles` table with the same `id`, linked via foreign key. That's why signup does two things: create the auth user, then insert a matching profile row.

---

## 5. `useNotices.js` — Database CRUD topic

This hook is the cleanest place to teach raw CRUD, since all four operations sit together:

```javascript
// CREATE
await supabase.from('notices').insert({ title, content, user_id: userId })

// READ
await supabase.from('notices').select('*').order('created_at', { ascending: false })

// UPDATE
await supabase.from('notices').update(fields).eq('id', id)

// DELETE
await supabase.from('notices').delete().eq('id', id)
```

**Teaching point:** `.from('notices')` targets a table, and the chained method (`.insert`, `.select`, `.update`, `.delete`) determines the SQL operation — this whole client library is essentially a JS-friendly builder for SQL, generated automatically the moment you create a table (no backend route-writing needed). `.eq('id', id)` is the equivalent of a SQL `WHERE id = ...` clause.

Good moment to connect back to RLS: even though this code *could* try to delete anyone's notice, the `Users can delete their own notices` policy silently blocks it server-side if `user_id` doesn't match the logged-in user — the client code doesn't need to check permissions itself.

---

## 6. `AvatarUpload.jsx` — Storage topic

```javascript
const filePath = `${userId}/${Date.now()}-${file.name}`

await supabase.storage.from('avatars').upload(filePath, file, { upsert: true })

const { data } = supabase.storage.from('avatars').getPublicUrl(filePath)

await supabase.from('profiles').update({ avatar_url: data.publicUrl }).eq('id', userId)
```

Three distinct steps worth separating clearly for students:
1. **Upload the raw file** into a *bucket* (a named storage container, like `avatars`)
2. **Get a public URL** for that file — Storage isn't a database table, it's more like a file system with its own security rules
3. **Save that URL as text** into the actual `profiles` table

This is a good spot to explain why the path is `{userId}/filename` rather than just `filename` — it directly maps to the storage RLS policy:
```sql
auth.uid()::text = (storage.foldername(name))[1]
```
The folder name in the path *is* the security boundary. Show students this connection explicitly — it's a common "aha" moment.

---

## 7. `useRealtimeNotices.js` — Realtime topic

```javascript
const channel = supabase
  .channel('notices-feed')
  .on('postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'notices' },
    (payload) => setNotices(prev => [payload.new, ...prev])
  )
  .subscribe()

return () => supabase.removeChannel(channel)
```

**Teaching point:** This is the one piece that has **no REST equivalent** — it opens a persistent WebSocket connection instead of a one-off HTTP request. `.channel()` names the connection, `.on('postgres_changes', ...)` says "tell me whenever this specific event happens on this specific table," and `payload.new` is the actual new row data pushed from the database the instant it changes.

Crucial teaching point: **this only works because you toggled the table into the `supabase_realtime` publication** in the dashboard. Students should understand this is a two-part contract: Postgres has to be told to *broadcast* changes (dashboard/SQL config), and the client has to *subscribe* to hear them (this code). Miss either half and nothing happens — a good debugging lesson.

The cleanup function (`removeChannel`) is worth flagging too — forgetting to unsubscribe when a component unmounts is a classic memory-leak bug in realtime apps.

---

## 8. The database trigger — server-side automation (bonus/advanced topic)

```sql
create or replace function notify_all_users_on_new_notice()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into notifications (user_id, message)
  select id, 'New notice posted: "' || new.title || '"'
  from auth.users
  where id != new.user_id;
  return new;
end;
$$;

create trigger trg_notify_all_users_on_new_notice
after insert on notices
for each row
execute function notify_all_users_on_new_notice();
```

**Teaching point:** This is the one piece of "backend logic" that lives entirely *inside* the database rather than in React. It's a great way to show students that Supabase isn't just "a database you call from the frontend" — Postgres itself can react to changes and run logic automatically. `security definer` is worth pausing on: it means this function runs with elevated privileges, which is *why* it's allowed to insert notification rows for other users even though the RLS policy on `notifications` normally only lets you insert rows for yourself.

---

## How it all connects to the Supabase interface, end to end

Good closing diagram to sketch on a whiteboard for students:

```
React app (supabase-js)
        │
        ▼
Auto-generated REST API (PostgREST)  ──┐
        │                              │  both governed by
        ▼                              │  Row Level Security
Postgres tables (profiles/notices/..)  │  policies you wrote
        │                              │  in the SQL Editor
        ▼                              │
Realtime engine ── broadcasts ─────────┘
(only for tables in supabase_realtime publication)
```

Every dashboard screen they clicked through maps to one of these boxes: **Table Editor/SQL Editor** → the Postgres box, **Authentication** → the JWT/session layer, **Storage** → a parallel file system with its own RLS, **Database → Publications** → the Realtime broadcast switch.

Want me to turn this into an actual slide deck or handout PDF for the bootcamp session, given your past decks have used the dark developer-console aesthetic?