import { useEffect, useRef } from 'react';

function usePrevious(previousAge) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = previousAge;
  });
  return ref.current;
}

export default usePrevious;
