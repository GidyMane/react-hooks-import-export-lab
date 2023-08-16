import React from "react";
import NavBar  from "./NavBar"
import Home from "./Home"
import About from "./About"


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About image="image"/>
    </div>
  );
}

export default App;
