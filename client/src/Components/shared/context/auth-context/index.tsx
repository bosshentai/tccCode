// import { string } from "prop-types";
import {
  createContext,
  Dispatch,
  SetStateAction,
} from 'react'

interface AuthContextType {
  isLoggedIn: boolean
  userId: string | null | undefined
  token: string | null | undefined
  login: (
    userId: string,
    token: string,
    expirationDate: Date,
  ) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  // is
  // isLoggedIn: false,
  // userId: null,
  // token: '',
  // login: (
  //   uuid: string,
  //   token: string,
  //   expirationDate: Date,
  // ) => {},
  // logout: () => {},
} as AuthContextType)
