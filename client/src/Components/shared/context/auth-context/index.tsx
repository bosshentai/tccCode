// import { string } from "prop-types";
import {
  createContext,

} from 'react'

interface User {
  id: string
}

interface AuthContextType {
  isLoggedIn: boolean
  userId: string | null | undefined
  token: string | null | undefined
  login: (
    userId: string,
    token: string,
    expirationDate: number,
  ) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
)

// export const AuthProvider: React.FC = ({
//   children,
// }: {
//   children: any
// }) => {
//   const [user, setUser] = useState<User | null>(null)


  

//   return (
//     <AuthContext.Provider
//       value={{
//         isLoggedIn: !!userId,
//         login,
//         logout,
//         token,
//       }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }
