import UserProfile from './UserProfile.jsx'

// BEFORE (prop drilling): Sidebar would receive `user` as a prop
// and pass it down: <UserProfile user={user} />
//
// AFTER (context): Sidebar doesn't touch user data at all.
// UserProfile reads from context directly.
function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Sidebar</h2>
      <p>
        This component also used to shuttle the <code>user</code> prop it
        never consumed. Now it simply renders <code>UserProfile</code> — no
        props needed.
      </p>
      {/* UserProfile receives no props — it consumes UserContext itself */}
      <UserProfile />
    </aside>
  )
}

export default Sidebar
