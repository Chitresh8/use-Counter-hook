import React from "react";
import "./App.css";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";

function App() {
  return (
    <React.Fragment>
      <h1 className="text-center">Counters with use Counter Custom hook</h1>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
