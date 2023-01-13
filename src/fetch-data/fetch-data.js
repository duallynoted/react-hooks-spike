import React from "react";
import ApiCalls from "./components/api-calls";

function FetchData() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Fetch Data</h2>
        <ApiCalls />
      </header>
    </div>
  );
}

export default FetchData;
