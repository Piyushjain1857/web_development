// rafce -shortcut to create react component

import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Demo from "./Demo";

const App = () => {
  return (
    <div>
      <Navbar/>
      <div>App</div>
      <h1>This is heading tag</h1>
      <Home/>
      <Demo/>

    </div>
  );
};

export default App;
