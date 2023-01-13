import React, { useMemo, useState } from "react";
import Child from "./components/child";

function UseMemo() {
  const [num, setNum] = useState(0);
  const handleOnClick = () => {
    setNum(num + 1);
  };
  const memoizedChild = useMemo(() => {
    return <Child />;
  }, []);
  return (
    <div>
      <p>Number: {num}</p>
      <button onClick={handleOnClick}>Increment Number</button>
      <h4>Normal Render</h4>
      <Child />
      <h4>Memoized Render</h4>
      {memoizedChild}
    </div>
  );
}

export default UseMemo;
