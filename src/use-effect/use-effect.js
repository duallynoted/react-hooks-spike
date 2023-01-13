import React from "react";
import DateEvents from "./components/date-events";
import LifeCycles from "./components/life-cycles";

function UseEffect() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Use Another Effexx More Times</h2>
        <DateEvents />
        <h2>Use Effect Lifecycles</h2>
        <LifeCycles />
      </header>
    </div>
  );
}

export default UseEffect;
