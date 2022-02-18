import React from "react";
import { MainNavigation } from "./shared/components/Navigation/MainNavigation";


// const Client = lazy(() => import ("./pages/Client"));

function App() {
  return (
    <div>
      <MainNavigation />
      <main>
        <h1>Hello</h1>
      </main>
    </div>
  );

  // return <h1>hello</h1>
}

export default App;
