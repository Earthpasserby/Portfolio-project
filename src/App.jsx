import {useState} from "react";
import Header from "./Component/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Sidenav from "./Component/Sidenav";

function App() {
  return (
    <>
      <Router>
      <Sidenav/>

      </Router>
    </>
  );
}

export default App;
