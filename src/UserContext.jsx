import { createContext, useState } from 'react'

// Create the context object that components will consume
export const UserContext = createContext(null)

// Provider component that wraps the app and makes user data available
// to any descendant component — no prop drilling required.
export function UserProvider({ children }) {
  const [user] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    themePreference: 'Dark Mode',
  })

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}
