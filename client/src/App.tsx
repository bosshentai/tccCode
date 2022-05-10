import React from "react";


import { PagesRoutes } from "./Components/routes/PagesRoutes";
import { MainNavigation } from "./Components/shared/components/Navigation/MainNavigation";

import {Profile} from "./Components/shared/components/Profile";

// const Client = lazy(() => import ("./pages/Client"));

function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Profile />

        <PagesRoutes />
      </main>
    </>
  );

  // return <h1>hello</h1>
}

export default App;
