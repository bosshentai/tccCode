import React, { useState } from 'react'
import { Login } from './Components/Login/page'

import { PagesRoutes } from './Components/routes/PagesRoutes'
import { MainNavigation } from './Components/shared/components/Navigation/MainNavigation'

import { Profile } from './Components/shared/components/Profile'
import { AuthContext } from './Components/shared/context/auth-context'
import { useAuth } from './Components/shared/hooks/auth-hook'

// const Client = lazy(() => import ("./pages/Client"));

function App() {
  const [isLogin, setLogin] = useState(true)
  const { token, login, logout, userId } = useAuth()

  // const loginHandler = () => {
  //   return true
  // }

  let page;

  if(token){
    page =(
      <>
      <MainNavigation/>
      <main>
        <Profile/>
        <PagesRoutes/>
      </main>
      </>
    )
  }else{
    page = (
      <Login/>
    )
  }



  return (
    <>
      {/* {!isLogin && <Login />}
      {isLogin && (
        <>
          <MainNavigation />
          <main>
            <Profile />

            <PagesRoutes />
          </main>
        </>
      )} */}

      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout
        }}>
       {page}
      </AuthContext.Provider>
    </>
  )

  //  <h1>hello</h1>)
}

export default App
