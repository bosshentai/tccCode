import { useCallback, useEffect, useState } from 'react'

export const useAuth = () => {
  const [token, setToken] = useState<string | null>()
  const [tokenExpirationDate, setTokenExpirationDate] =
    useState<string | null>()
  const [userId, setUserId] = useState<string | null>()

  const login = useCallback(
    (uid: string, token: string, expirationDate: Date) => {
      setToken(token)
      setUserId(uid)

      const tokenExperationDate1 =
        expirationDate ||
        new Date(new Date().getTime() + 1000 * 60 * 60)
      setTokenExpirationDate(
        tokenExperationDate1.toString(),
      )

      console.log(tokenExperationDate1.toString())

      // have to fixe the time set Date

      localStorage.setItem(
        'userData',
        JSON.stringify({
          userId: uid,
          token: token,
          expiration: tokenExperationDate1.toString(),
        }),
      )
    },
    [],
  )

  const logout = useCallback(() => {
    setToken(null)
    setTokenExpirationDate(null)
    setUserId(null)
    localStorage.removeItem('userData');
  }, [])

  useEffect(() => {
    const storedData = JSON.parse(
      localStorage.getItem('userData') || '',
    )
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        storedData.expiration,
      )
    }
  }, [login])

  return { token, login, userId ,logout}
}
