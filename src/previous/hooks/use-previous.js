import { useDebugValue, useEffect, useRef } from 'react';

function usePrevious(previousAge) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = previousAge;
  });
  useDebugValue(ref.current, checkRef); // format is its second parameter, a function, and can be passed in like this
  // useDebugValue(ref.current > '40' ? 'too much' : 'not enough'); //or can be written in as an argument
  return ref.current;
}

export default usePrevious;

const checkRef = (ref) => {
  if (ref > '40') {
    return 'That is too much.';
  } else if (ref < '40') {
    return 'Hmmm, not enough.';
  } else {
    return 'Just right.';
  }
};
