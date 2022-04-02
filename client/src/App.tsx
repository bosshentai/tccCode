import React from "react";

import { PagesRoutes } from "./routes/PagesRoutes";
import { MainNavigation } from "./shared/components/Navigation/MainNavigation";
import { Profile } from "./shared/components/Profile";

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
