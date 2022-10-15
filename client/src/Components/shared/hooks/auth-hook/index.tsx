import { useCallback, useEffect, useState } from 'react'
import dayjs from 'dayjs'

let logoutTimer:
  | string
  | number
  | NodeJS.Timeout
  | undefined

export const useAuth = () => {
  const [token, setToken] = useState<string | null>()
  const [tokenExpirationDate, setTokenExpirationDate] =
    useState<number | null>()
  const [userId, setUserId] = useState<string | null>()

  const login = useCallback(
    (
      uid: string,
      token: string,
      expirationDate: number,
    ) => {
      setToken(token)
      setUserId(uid)
      setTokenExpirationDate(expirationDate)

      localStorage.setItem(
        'userData',
        JSON.stringify({
          userId: uid,
          token: token,
          expirationDate,
        }),
      )
    },
    [],
  )

  const logout = useCallback(() => {
    setToken(null)
    setTokenExpirationDate(null)
    setUserId(null)
    localStorage.removeItem('userData')
  }, [])

  // useEffect(() => {
  //   if (token && tokenExpirationDate) {
  //     console.log(tokenExpirationDate)
  //     // const remainingTime = new Date(tokenExpirationDate) - new Date().getTime()
  //     // const remainingTime =  new Date(new Date().getTime() + 1000 * 60 * 60).getTime()
  //     // logoutTimer = setTimeout(logout,remainingTime)
  //   } else {
  //     clearTimeout(logoutTimer)
  //   }
  // }, [token, logout, tokenExpirationDate])

  useEffect(() => {
    try {
      async function loadStoragedData() {
        const storageData = await JSON.parse(
          localStorage.getItem('userData') || '',
        )

        const hasExpire = dayjs().isAfter(
          dayjs.unix(storageData.expiration),
        )

        // console.log(hasExpire)

        if (storageData && storageData.token && !hasExpire) {
          login(
            storageData.userId,
            storageData.token,
            storageData.expiration
          )
        }
      }

      loadStoragedData()
    } catch (e) {
      return
    }
    // const storedData = await JSON.parse(
    //   localStorage.getItem('userData') || '',
    // )
    // const hasExpire = dayjs().isAfter(dayjs.unix(storedData.expiration))
    // if (
    //   storedData &&
    //   storedData.token &&
    //   hasExpire
    //   // new Date(storedData.expiration) > new Date()
    // ) {
    //   login(
    //     storedData.userId,
    //     storedData.token,
    //     storedData.expiration,
    //   )
    // }
  }, [login])

  return { token, login, userId, logout }
}
