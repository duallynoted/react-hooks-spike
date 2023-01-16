import React, { useState } from 'react';
import usePrevious from '../hooks/use-previous';

function PreviouslyUsed() {
  const [age, setAge] = useState(40);
  const previousAge = usePrevious(age);
  const handleYoungerButton = () => {
    setAge(age - 1);
  };
  const handleOlderButton = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <p>Current Age: {age}</p>
      <p>Previous Age: {previousAge}</p>
      <button onClick={handleYoungerButton}>Make me younger</button>
      <button onClick={handleOlderButton}>Make me older</button>
    </div>
  );
}

export default PreviouslyUsed;
