import React from "react";
import "./App.scss";
import IntroApp from "./intro-to-hooks/project-components/intro-app";
import AddingEvents from "./adding-events/adding-events";
import OnChangeAndRefs from "./on-change-and-refs/on-change-and-refs";
import UseMemo from "./use-memo/use-memo";
import UseEffect from "./use-effect/use-effect";
import FetchData from "./fetch-data/fetch-data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Intro</h1>
        <IntroApp />
        <h1>Adding Events</h1>
        <AddingEvents />
        <h1>On Change and Refs</h1>
        <OnChangeAndRefs />
        <h1>Use Effect</h1>
        <UseEffect />
        <h1>Fetch Data</h1>
        <FetchData />
        <h2>Use Memo</h2>
        <UseMemo />
      </header>
    </div>
  );
}

export default App;
