import React, { useState } from "react";

function OnChange() {
  const [name, setName] = useState("default");
  const [income, setIncome] = useState("high");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("state -- name:", name, " income:", income);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Name: </span>
          <input value={name} type="text" onChange={handleNameChange} />
        </div>
        <div>
          <span>Income: </span>
          <select value={income} onChange={handleIncomeChange}>
            <option value="high">High</option>
            <option value="mid">Mid</option>
            <option value="low">Low</option>
          </select>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
}

export default OnChange;
