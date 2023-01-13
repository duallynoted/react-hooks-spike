import React, { useLayoutEffect, useRef, useState } from 'react';
import './the-use-layout-effect.scss';

function useDim(el, val) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    let boundingBox = el.current.getBoundingClientRect();
    setHeight(boundingBox.height);
    setWidth(boundingBox.width);
  }, [val]);
  return { height, width };
}

function TheUseLayoutEffect() {
  const [kal, setVal] = useState(2);
  const kalEl = useRef(null);
  const { height, width } = useDim(kalEl, kal);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Height: {height}</h1>
        <h1>Width: {width}</h1>
        <div ref={kalEl}>{kal}</div>
        <button onClick={() => setVal(kal * 10)}>10*</button>
      </header>
    </div>
  );
}

export default TheUseLayoutEffect;
