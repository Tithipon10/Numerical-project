import { useState } from "react";
import "./App.css";
import Bisection from "./components/Bisection";
import Sample from "./components/Function";

function App() {
  return (
    <>
      <Bisection />
      <h1>Numerical Project</h1>
      <Sample />
    </>
  );
}

export default App;
