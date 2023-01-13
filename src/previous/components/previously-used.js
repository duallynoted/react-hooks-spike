import React, { useState } from 'react';
import usePrevious from '../hooks/use-previous';

function PreviouslyUsed() {
  const [age, setAge] = useState(21);
  const previousAge = usePrevious(age);
  const handleYoungerButton = () => {
    setAge(age - 1);
  };
  return (
    <div>
      <p>Current Age: {age}</p>
      <p>Previous Age: {previousAge}</p>
      <button onClick={handleYoungerButton}>Make me younger</button>
    </div>
  );
}

export default PreviouslyUsed;
