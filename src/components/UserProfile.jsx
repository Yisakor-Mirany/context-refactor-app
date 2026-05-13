import { useContext } from 'react'
import { UserContext } from '../UserContext.jsx'

// BEFORE (prop drilling): UserProfile received `user` as a prop passed
// all the way from App → Dashboard → Sidebar → UserProfile.
//
// AFTER (context): UserProfile reads user data directly from context.
// No intermediate component needs to know about or forward user data.
function UserProfile() {
  const { user } = useContext(UserContext)

  return (
    <div className="user-profile">
      <div className="avatar">{user.name.charAt(0)}</div>
      <h3>User Profile</h3>
      <ul className="profile-details">
        <li>
          <span className="label">Name</span>
          <span className="value">{user.name}</span>
        </li>
        <li>
          <span className="label">Email</span>
          <span className="value">{user.email}</span>
        </li>
        <li>
          <span className="label">Theme</span>
          <span className="value theme-badge">{user.themePreference}</span>
        </li>
      </ul>
      <p className="context-note">
        Data read via <code>useContext(UserContext)</code> — not passed as props.
      </p>
    </div>
  )
}

export default UserProfile
