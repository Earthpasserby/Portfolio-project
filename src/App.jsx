import { useState } from "react";
// import Header from "./Component/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Sidenav from "./Component/Sidenav";
import Main from "./Component/Main";
import Portfolio from "./Component/Portfolio";
import Projects from "./Component/Projects";

function App() {
  return (
    <>
      <Router>
        <Sidenav />
        <Main />
        <Portfolio />
        <Projects />
      </Router>
    </>
  );
}

export default App;
