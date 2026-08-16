For teaching students how React applications are structured in real companies, it's best to show a **Feature-Based Architecture** rather than putting everything inside `components/`.

## Small Project Structure (Beginner)

```bash
src/
│
├── assets/
│   ├── images/
│   └── icons/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Button.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── App.jsx
└── main.jsx
```

Good for learning but becomes difficult to manage when the project grows.

---

# Industry-Level React Folder Architecture

Imagine you're building an E-Commerce, LMS, CRM, Student Tracker, or PerformX.

```bash
src/
│
├── api/
│   ├── axios.js
│   ├── authApi.js
│   ├── userApi.js
│   └── productApi.js
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── videos/
│   └── fonts/
│
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Loader.jsx
│   │   └── Table.jsx
│   │
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Footer.jsx
│   │   └── DashboardLayout.jsx
│   │
│   └── ui/
│       ├── Card.jsx
│       ├── Badge.jsx
│       └── Avatar.jsx
│
├── features/
│   │
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── services/
│   │   │   └── authService.js
│   │   │
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   │
│   │   └── authSlice.js
│   │
│   ├── students/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── studentSlice.js
│   │
│   ├── projects/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── projectSlice.js
│   │
│   └── assessments/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── assessmentSlice.js
│
├── hooks/
│   ├── useDebounce.js
│   ├── useLocalStorage.js
│   └── useFetch.js
│
├── routes/
│   ├── AppRoutes.jsx
│   ├── PrivateRoute.jsx
│   └── PublicRoute.jsx
│
├── store/
│   ├── store.js
│   └── rootReducer.js
│
├── context/
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
│
├── services/
│   ├── authService.js
│   ├── emailService.js
│   └── uploadService.js
│
├── utils/
│   ├── constants.js
│   ├── helpers.js
│   ├── validators.js
│   └── formatters.js
│
├── styles/
│   ├── global.css
│   ├── variables.css
│   └── theme.css
│
├── config/
│   ├── env.js
│   └── appConfig.js
│
├── App.jsx
└── main.jsx
```

---

# What Each Folder Does

| Folder     | Purpose                                     |
| ---------- | ------------------------------------------- |
| assets     | Images, icons, videos, fonts                |
| api        | Axios configuration and API calls           |
| components | Reusable UI Components                      |
| features   | Business modules (Auth, Students, Projects) |
| hooks      | Custom React Hooks                          |
| routes     | Routing and Protected Routes                |
| store      | Redux Store                                 |
| context    | Context API                                 |
| services   | External services integration               |
| utils      | Helper functions                            |
| styles     | Global CSS and themes                       |
| config     | Environment configuration                   |

---

# Structure Used in Most Product-Based Companies

```bash
src/
│
├── features/
│   ├── auth/
│   ├── users/
│   ├── dashboard/
│   ├── reports/
│   └── settings/
│
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── constants/
│
├── routes/
├── store/
├── App.jsx
└── main.jsx
```

This is called **Feature-Based Architecture** and is preferred because:

✅ Easy to scale

✅ Easy for multiple developers

✅ Easy to maintain

✅ Reduces code duplication

✅ Suitable for projects with 10,000+ lines of code

---

## Example: PerformX Folder Structure

```bash
src/
│
├── features/
│   ├── authentication/
│   ├── students/
│   ├── github-tracker/
│   ├── leetcode-tracker/
│   ├── assessments/
│   ├── leaderboard/
│   ├── projects/
│   └── reports/
│
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── layouts/
│
├── routes/
├── store/
├── services/
├── assets/
└── App.jsx
```

### Rule to teach students

> **If a component is used only inside one module, keep it inside that feature folder.**
>
> **If a component is reused across multiple modules, move it to `shared/components` or `components/common`.**

This single rule helps students understand professional React architecture better than memorizing folder names.
