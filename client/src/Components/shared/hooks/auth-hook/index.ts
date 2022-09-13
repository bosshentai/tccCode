import { useCallback, useEffect, useState } from 'react';




export const useAuth = () =>{
  const [token,setToken] = useState(false)
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [useId,setUserId] = useState(false)


  const login = useCallback((uid :boolean,token :boolean,expirationDate: string) =>{
    setToken(token)
    setUserId(uid)
    // const tokenExperationDate = 


  },[])




}