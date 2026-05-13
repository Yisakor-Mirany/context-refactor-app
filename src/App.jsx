import { UserProvider } from './UserContext.jsx'
import Dashboard from './components/Dashboard.jsx'

// UserProvider wraps the entire tree so any component can access user data
// via useContext — no user props are passed manually anywhere below this point.
function App() {
  return (
    <UserProvider>
      <div className="app">
        <header className="app-header">
          <h1>Context Refactor App</h1>
          <p className="app-subtitle">Demonstrating React Context vs Prop Drilling</p>
        </header>
        {/* Dashboard receives no user props — it reads from context instead */}
        <Dashboard />
      </div>
    </UserProvider>
  )
}

export default App
