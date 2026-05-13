# Context Refactor App

A React + Vite assignment demonstrating the **prop drilling problem** and how the **React Context API** solves it.

---

## What the project does

The app renders a component tree:

```
App → Dashboard → Sidebar → UserProfile
```

`UserProfile` needs access to a `user` object (name, email, themePreference).  
The project first illustrates **why** passing that object as a prop through every intermediate component is painful, then shows the clean solution using React Context.

---

## What is prop drilling?

Prop drilling happens when a value must be passed as a prop through one or more components that **don't use it themselves** — they just forward it to a child.

```jsx
// Prop-drilling version
function App() {
  const user = { name: 'Alex', email: 'alex@example.com', themePreference: 'Dark Mode' }
  return <Dashboard user={user} />
}

function Dashboard({ user }) {          // doesn't use user — just passes it on
  return <Sidebar user={user} />
}

function Sidebar({ user }) {            // doesn't use user — just passes it on
  return <UserProfile user={user} />
}

function UserProfile({ user }) {        // finally uses it
  return <p>{user.name}</p>
}
```

Problems:
- Intermediate components are polluted with props they don't need.
- Adding a new field to `user` means updating every component in the chain.
- Refactoring the tree requires updating props at every level.

---

## How React Context solves the problem

React Context lets you **broadcast** a value from a provider anywhere in the tree, and **subscribe** to it in any descendant — skipping all the middle layers.

```jsx
// Context version
function App() {
  return (
    <UserProvider>       {/* broadcasts user data */}
      <Dashboard />      {/* no user prop */}
    </UserProvider>
  )
}

function Dashboard() {   // no user prop — clean
  return <Sidebar />
}

function Sidebar() {     // no user prop — clean
  return <UserProfile />
}

function UserProfile() {
  const { user } = useContext(UserContext)   // reads directly from context
  return <p>{user.name}</p>
}
```

---

## Technologies used

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| React Context API | Global state without prop drilling |
| CSS (plain) | Styling |

---

## How to install dependencies

```bash
npm install
```

---

## How to run the app

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

Other scripts:

```bash
npm run build    # production build
npm run preview  # preview production build locally
```

---

## Key files / components

| File | Role |
|---|---|
| `src/UserContext.jsx` | Creates `UserContext` and exports `UserProvider` which holds the `user` state |
| `src/App.jsx` | Root component — wraps the tree with `<UserProvider>`, passes **no** user props |
| `src/components/Dashboard.jsx` | Middle layer — renders `<Sidebar>` with no props; annotated to show what changed |
| `src/components/Sidebar.jsx` | Middle layer — renders `<UserProfile>` with no props; annotated to show what changed |
| `src/components/UserProfile.jsx` | Leaf component — reads `user` via `useContext(UserContext)` |
| `src/App.css` | All styles |

---

## GitHub setup

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```
