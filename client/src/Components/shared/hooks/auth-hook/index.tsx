import { useCallback, useEffect, useState } from 'react'

export const useAuth = () => {
  const [token, setToken] = useState<string>()
  const [tokenExpirationDate, setTokenExpirationDate] =
    useState<Date>()
  const [userId, setUserId] = useState<string>()

  const login = useCallback(
    (uid: string, token: string, expirationDate: Date) => {
      setToken(token)
      setUserId(uid)
      const tokenExperationDate =
        expirationDate ||
        new Date(new Date().getTime() + 1000 * 60 * 60)
      setTokenExpirationDate(tokenExperationDate)

      localStorage.setItem(
        'userData',
        JSON.stringify({
          userId: uid,
          token: token,
          expiration: tokenExpirationDate?.toISOString(),
        }),
      )
    },
    [],
  )

  return { token, login, userId }
}
