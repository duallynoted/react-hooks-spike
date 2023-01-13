import React from "react";
import "./on-change-and-refs.scss";
import OnChange from "./components/on-change";
import UseRef from "./components/use-ref";
import ForwardTheRef from "./components/forward-ref";

function OnChangeAndRefs() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h4 style={{ color: "green" }}>Forwarding Refs</h4>
          <ForwardTheRef />
        </div>
        <div>
          <h4 style={{ padding: "100px 0 0 0", color: "orange" }}>Use Ref</h4>
          <UseRef />
        </div>
        <div>
          <h4 style={{ padding: "100px 0 0 0", color: "blueviolet" }}>
            On Change
          </h4>
          <OnChange />
        </div>
      </header>
    </div>
  );
}

export default OnChangeAndRefs;
