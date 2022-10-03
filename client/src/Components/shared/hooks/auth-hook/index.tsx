import { useCallback, useEffect, useState } from 'react'

export const useAuth = () => {
  const [token, setToken] = useState<string>()
  const [tokenExpirationDate, setTokenExpirationDate] =
    useState<string>()
  const [userId, setUserId] = useState<string>()

  const login = useCallback(
    (uid: string, token: string, expirationDate: Date) => {
      setToken(token)
      setUserId(uid)
     
      const tokenExperationDate1  =
        expirationDate ||
        new Date(new Date().getTime() + 1000 * 60 * 60)
      setTokenExpirationDate(tokenExperationDate1.toString())


      console.log(tokenExperationDate1.toString());


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


    useEffect(() =>{
      const storedData = JSON.parse(localStorage.getItem('userData') || "")
      if(
        storedData &&
        storedData.token &&
        new Date( storedData.expiration )> new Date()
      ){
        login(storedData.userId,storedData.token, storedData.expiration)
      }

    },[login])


  return { token, login, userId }
}
