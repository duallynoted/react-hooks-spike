import React, { useEffect, useState } from "react";

const initXY = {
  x: null,
  y: null,
};

function DateEvents() {
  const [time, setTime] = useState(Date);
  const [xy, setXY] = useState(initXY);
  useEffect(() => {
    let handle = setInterval(() => {
      setTime(Date);
    }, 1000);
    return () => {
      clearInterval(handle);
    };
  });
  const handleMouseMove = (e) => {
    setXY({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
  useEffect(() => {
    if (xy.x === 450 && xy.y === 230) {
      prompt("Congratulations, you found it. Continue?");
    }
  }, [xy]);
  return (
    <div>
      <h3>Date and Time: {time}</h3>
      <h3>{`x:${xy.x} and y:${xy.y}`}</h3>
    </div>
  );
}

export default DateEvents;
