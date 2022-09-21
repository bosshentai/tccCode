import React, { useState } from 'react'
import { Login } from './Components/Login/page'

import { PagesRoutes } from './Components/routes/PagesRoutes'
import { MainNavigation } from './Components/shared/components/Navigation/MainNavigation'

import { Profile } from './Components/shared/components/Profile'

// const Client = lazy(() => import ("./pages/Client"));

function App() {
  const [isLogin, setLogin] = useState(false)

  return (
    <>
      {!isLogin && <Login />}
      {isLogin && (
        <>
          <MainNavigation />
          <main>
            <Profile />

            <PagesRoutes />
          </main>
        </>
      )}
      
    </>
  )

  //  <h1>hello</h1>)
}

export default App
