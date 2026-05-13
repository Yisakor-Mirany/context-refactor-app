import Sidebar from './Sidebar.jsx'

// BEFORE (prop drilling): Dashboard would receive `user` as a prop
// and pass it down: <Sidebar user={user} />
//
// AFTER (context): Dashboard doesn't touch user data at all.
// Sidebar reads from context on its own.
function Dashboard() {
  return (
    <main className="dashboard">
      <div className="dashboard-content">
        <div className="dashboard-main">
          <h2>Dashboard</h2>
          <p>
            This component sits between <code>App</code> and <code>Sidebar</code>.
            With prop drilling it would need to accept and forward a{' '}
            <code>user</code> prop it never uses itself. With Context, it stays
            clean — no user data passes through here.
          </p>
          <div className="info-card">
            <h3>What changed here?</h3>
            <p>
              In the prop-drilling version, Dashboard's signature looked like:
            </p>
            <pre className="code-snippet">{'function Dashboard({ user }) {\n  return <Sidebar user={user} />\n}'}</pre>
            <p>Now it simply renders Sidebar with no props:</p>
            <pre className="code-snippet">{'function Dashboard() {\n  return <Sidebar />\n}'}</pre>
          </div>
        </div>
        {/* Sidebar receives no props — it reads user from context itself */}
        <Sidebar />
      </div>
    </main>
  )
}

export default Dashboard
