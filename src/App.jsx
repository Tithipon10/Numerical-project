import React from "react";
import "./App.css";
import Sample from "./components/Function";
import Bisection from "./components/Bisection";

function App() {
  return (
    <div className="App">
      {/* Display Bisection component */}
      <Bisection /><br /><br />
      {/* Display Sample component */}
      <Sample />
    </div>
  );
}

export default App;
