# Supabase JS — Command Reference (CampusBoard Edition)

A categorized list of every `supabase-js` command used in the CampusBoard
project, plus other commands you'll commonly need in real projects.

Legend: ✅ = used in CampusBoard  |  🔹 = good to know, not used here

---

## 1. Client Setup

### ✅ `createClient(url, anonKey)`
Creates the single client instance every other command is called on.
```javascript
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```
**Use case:** Called once per project, in `supabaseClient.js`. Everything
else (`supabase.auth`, `supabase.from`, `supabase.storage`,
`supabase.channel`) hangs off this one object.

---

## 2. Authentication (`supabase.auth`)

### ✅ `supabase.auth.signUp({ email, password })`
Creates a new user in `auth.users`.
```javascript
const { data, error } = await supabase.auth.signUp({ email, password })
```
**Use case:** Signup form submission. `data.user` gives you the new
user's `id` (used to create a matching `profiles` row). `data.session`
is `null` if email confirmation is required.

### ✅ `supabase.auth.signInWithPassword({ email, password })`
Logs in an existing user with email/password.
```javascript
const { data, error } = await supabase.auth.signInWithPassword({ email, password })
```
**Use case:** Login form submission. Returns a session + JWT on success.

### ✅ `supabase.auth.signOut()`
Logs the current user out, clears the local session.
```javascript
await supabase.auth.signOut()
```
**Use case:** Logout button in the navbar.

### ✅ `supabase.auth.getSession()`
Reads the currently stored session (if any) — checks localStorage, does
NOT make a network call for basic checks.
```javascript
const { data: { session } } = await supabase.auth.getSession()
```
**Use case:** Runs once on app load, inside `AuthContext`, so a page
refresh doesn't log the user out.

### ✅ `supabase.auth.onAuthStateChange(callback)`
Subscribes to login/logout/token-refresh events; fires the callback
every time auth state changes anywhere in your app.
```javascript
const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
  setSession(session)
})
// later: listener.subscription.unsubscribe()
```
**Use case:** Keeps `AuthContext`'s `session` state in sync automatically
— you never manually call `setSession` after login/logout yourself.

### 🔹 `supabase.auth.getUser()`
Like `getSession()`, but re-validates the JWT against the Auth server
(safer for privileged actions since it can't be spoofed by a stale token).
```javascript
const { data: { user }, error } = await supabase.auth.getUser()
```
**Use case:** Before letting a user perform a sensitive action, confirm
their session is still genuinely valid server-side.

### 🔹 `supabase.auth.updateUser({ email, password, data })`
Updates the logged-in user's own email, password, or custom metadata.
```javascript
await supabase.auth.updateUser({ password: 'newpassword123' })
```
**Use case:** "Change password" or "change email" settings pages.

### 🔹 `supabase.auth.resetPasswordForEmail(email)`
Sends a password-reset email.
```javascript
await supabase.auth.resetPasswordForEmail(email, {
  redirectTo: 'https://yourapp.com/update-password',
})
```
**Use case:** "Forgot password" flow.

### 🔹 `supabase.auth.signInWithOAuth({ provider })`
Starts a social login flow (Google, GitHub, etc.).
```javascript
await supabase.auth.signInWithOAuth({ provider: 'github' })
```
**Use case:** "Sign in with Google/GitHub" buttons.

### 🔹 `supabase.auth.signInWithOtp({ email })`
Sends a magic link or OTP code instead of requiring a password.
```javascript
await supabase.auth.signInWithOtp({ email })
```
**Use case:** Passwordless login.

---

## 3. Database CRUD (`supabase.from(table)`)

### ✅ `.select(columns)`
Reads rows. `'*'` = all columns.
```javascript
const { data, error } = await supabase.from('notices').select('*')
```
**Use case:** Fetching the notice board feed.

### ✅ `.insert(rowOrRows)`
Adds new row(s).
```javascript
await supabase.from('notices').insert({ title, content, user_id: userId })
```
**Use case:** Posting a new notice; creating a profile row at signup.

### ✅ `.update(fields)`
Modifies existing row(s) — always pair with a filter like `.eq()`, or it
updates every row in the table.
```javascript
await supabase.from('profiles').update({ full_name, bio }).eq('id', userId)
```
**Use case:** Saving profile edits.

### ✅ `.delete()`
Removes row(s) — again, always pair with a filter.
```javascript
await supabase.from('notices').delete().eq('id', noticeId)
```
**Use case:** Deleting your own notice.

### ✅ `.eq(column, value)`
Filter: column equals value (SQL `WHERE column = value`).
```javascript
.eq('user_id', userId)
```

### ✅ `.order(column, { ascending })`
Sorts results.
```javascript
.order('created_at', { ascending: false }) // newest first
```

### ✅ `.single()`
Expects exactly one row back; **errors (406) if 0 or 2+ rows match.**
```javascript
const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single()
```
**Use case:** Fetching one specific profile — but risky if the row might
not exist yet.

### ✅ `.maybeSingle()`
Same as `.single()`, but returns `null` instead of erroring when 0 rows
match. Safer default for "fetch one row that might not exist yet."
```javascript
const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).maybeSingle()
```
**Use case:** The fix we applied to `Profile.jsx` to avoid the 406 error.

### 🔹 `.neq(column, value)`
Filter: column NOT equal to value.

### 🔹 `.in(column, arrayOfValues)`
Filter: column matches any value in an array.
```javascript
.in('id', unreadNotificationIds)
```
**Use case:** Marking multiple notifications as read at once (used in
`useNotifications.js`'s `markAllRead`).

### 🔹 `.gt() / .gte() / .lt() / .lte()`
Greater than / greater-or-equal / less than / less-or-equal filters.
```javascript
.gte('created_at', oneWeekAgo)
```
**Use case:** "Show notices from the last 7 days."

### 🔹 `.like(column, pattern) / .ilike(column, pattern)`
Text pattern matching (`ilike` = case-insensitive).
```javascript
.ilike('title', '%exam%')
```
**Use case:** Search bar on the notice board.

### 🔹 `.limit(count)`
Caps how many rows come back.
```javascript
.limit(10)
```

### 🔹 `.range(from, to)`
Pagination — fetch a specific slice of rows.
```javascript
.range(0, 9) // first 10 rows
```

### 🔹 `.upsert(rowOrRows)`
Insert, or update if a row with the same primary key already exists.
```javascript
await supabase.from('profiles').upsert({ id: userId, full_name })
```
**Use case:** "Create profile if missing, otherwise update it" in one call
— an alternative to the manual maybeSingle-then-insert pattern we wrote.

### 🔹 `.select().single()` after insert/update
Returns the row you just wrote back to you (otherwise insert/update
return no data by default).
```javascript
const { data } = await supabase.from('notices').insert({...}).select().single()
```

---

## 4. Storage (`supabase.storage`)

### ✅ `supabase.storage.from(bucket).upload(path, file, options)`
Uploads a file into a bucket.
```javascript
await supabase.storage.from('avatars').upload(filePath, file, { upsert: true })
```
**Use case:** Avatar upload. `upsert: true` lets a re-upload overwrite the
same path instead of erroring.

### ✅ `supabase.storage.from(bucket).getPublicUrl(path)`
Builds a permanent public URL for a file (only works if the bucket is
marked public).
```javascript
const { data } = supabase.storage.from('avatars').getPublicUrl(filePath)
// data.publicUrl
```

### 🔹 `supabase.storage.from(bucket).remove([paths])`
Deletes file(s) from a bucket.
```javascript
await supabase.storage.from('avatars').remove([oldFilePath])
```
**Use case:** Cleaning up the old avatar when a user uploads a new one.

### 🔹 `supabase.storage.from(bucket).download(path)`
Downloads a file's raw content (for private buckets you can't just
link to).

### 🔹 `supabase.storage.from(bucket).createSignedUrl(path, expiresInSeconds)`
Generates a temporary, expiring URL for a file in a **private** bucket.
```javascript
const { data } = await supabase.storage.from('private-docs').createSignedUrl(path, 3600)
```
**Use case:** Letting a user download a private file for 1 hour without
making the whole bucket public.

### 🔹 `supabase.storage.from(bucket).list(folder)`
Lists files inside a bucket/folder.

---

## 5. Realtime (`supabase.channel`)

### ✅ `supabase.channel(name)`
Opens a named realtime channel (a WebSocket subscription).
```javascript
const channel = supabase.channel('notices-feed')
```

### ✅ `.on('postgres_changes', filterConfig, callback)`
Listens for database changes matching the filter.
```javascript
channel.on(
  'postgres_changes',
  { event: 'INSERT', schema: 'public', table: 'notices' },
  (payload) => setNotices(prev => [payload.new, ...prev])
)
```
**Use case:** Live notice feed, live notification bell. `event` can be
`'INSERT'`, `'UPDATE'`, `'DELETE'`, or `'*'` for all three.
`payload.new` = the new row; `payload.old` = the previous row (for
UPDATE/DELETE).

### ✅ `.subscribe()`
Actually opens the connection — nothing fires until this is called.
```javascript
channel.subscribe()
```

### ✅ `supabase.removeChannel(channel)`
Closes a channel — always call this in a `useEffect` cleanup function to
avoid memory leaks / duplicate listeners.
```javascript
return () => supabase.removeChannel(channel)
```

### 🔹 `filter: 'column=eq.value'` inside `postgres_changes`
Narrows a subscription to only rows matching a condition, instead of
every row in the table.
```javascript
channel.on('postgres_changes',
  { event: 'INSERT', schema: 'public', table: 'notifications', filter: `user_id=eq.${userId}` },
  callback
)
```
**Use case:** Used in `useNotifications.js` so each user only gets
realtime events for their own notifications, not everyone's.

### 🔹 Presence: `channel.on('presence', { event: 'sync' }, callback)`
Tracks who's currently online/connected to a channel (not DB-backed).
**Use case:** "3 people viewing this page" indicators, live cursors,
typing indicators.

### 🔹 Broadcast: `channel.send({ type: 'broadcast', event, payload })`
Sends a one-off message to everyone subscribed to a channel, without it
touching the database at all.
**Use case:** Ephemeral events like "user X is typing…" that don't need
to be persisted.

---

## 6. Error handling pattern (applies to everything above)

Every Supabase call returns the same shape — get students to internalize
this once and the rest of the API reads consistently:
```javascript
const { data, error } = await supabase.from('table').select('*')

if (error) {
  console.error(error.message)
  return
}
// safe to use `data` here
```

---

## Quick-reference table

| Category | Command | Used in CampusBoard? |
|---|---|---|
| Setup | `createClient()` | ✅ |
| Auth | `signUp / signInWithPassword / signOut` | ✅ |
| Auth | `getSession / onAuthStateChange` | ✅ |
| Auth | `getUser / updateUser / resetPasswordForEmail / signInWithOAuth / signInWithOtp` | 🔹 |
| CRUD | `select / insert / update / delete` | ✅ |
| CRUD | `eq / order / single / maybeSingle` | ✅ |
| CRUD | `neq / in / gt / lt / like / ilike / limit / range / upsert` | 🔹 |
| Storage | `upload / getPublicUrl` | ✅ |
| Storage | `remove / download / createSignedUrl / list` | 🔹 |
| Realtime | `channel / on('postgres_changes') / subscribe / removeChannel` | ✅ |
| Realtime | `filter (per-row scoping) / presence / broadcast` | 🔹 |