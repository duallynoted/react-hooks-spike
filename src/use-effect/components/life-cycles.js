import React, { useEffect, useState } from "react";

let born = false;
function LifeCycles() {
  const [growth, setGrowth] = useState(0);
  const [nirvana, setNirvana] = useState(false);
  useEffect(() => {
    if (born) {
      console.log("nirvana: ", born);
      document.title = "Nirvana Attained";
    }
  }, [nirvana]);

  useEffect(() => {
    console.log("I am born");
  }, []); //passing an empty array as a second argument means component is mounted for the first time (born)

  useEffect(() => {
    if (born) {
      console.log("I make mistakes and then learn from them.", born);
    } else {
      born = true;
    }
    if (growth > 70) {
      setNirvana(true);
    }
    return () => {
      console.log("Clean up after your mistakes.");
    };
  }, [growth]); // Initially, by not passing a second argument, it runs on initial mount, and every update
  //instead of defaulting to empty object. Then, the console complained about not providing one which
  //could lead to an infinite chain of updates, so to provide the `growth` variable.

  const handleGrow = () => {
    setGrowth(growth + 10);
  };
  return (
    <div>
      <h3>Growth: {growth}</h3>
      <button onClick={handleGrow}>Learn and Grow</button>
    </div>
  );
}

export default LifeCycles;
