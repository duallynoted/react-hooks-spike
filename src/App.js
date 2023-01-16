import React from 'react';
import './App.scss';
import IntroApp from './intro-to-hooks/project-components/intro-app';
import AddingEvents from './adding-events/adding-events';
import OnChangeAndRefs from './on-change-and-refs/on-change-and-refs';
import UseMemo from './use-memo/use-memo';
import UseEffect from './use-effect/use-effect';
import FetchData from './fetch-data/fetch-data';
import Previous from './previous/previous';
import TheUseLayoutEffect from './use-layout-effect/the-use-layout-effect';
import CustomFetch from './custom-fetch/custom-fetch';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <h1>Intro</h1> */}
        {/* <IntroApp /> */}
        {/* <h1>Adding Events</h1> */}
        {/* <AddingEvents /> */}
        {/* <h1>On Change and Refs</h1> */}
        {/* <OnChangeAndRefs /> */}
        {/* <h1>Use Effect</h1> */}
        {/* <UseEffect /> */}
        {/* <h1>Fetch Data</h1> */}
        {/* <FetchData /> */}
        {/* <h1>Use Memo</h1> */}
        {/* <UseMemo />  */}
        {/* <h1>Use Previous and Use Debug Value</h1> */}
        {/* <Previous /> */}
        {/* <h1>Use Layout Effect</h1> */}
        {/* <TheUseLayoutEffect />  */}
        <h1>Custom Fetch</h1>
        <CustomFetch />
      </header>
    </div>
  );
}

export default App;
