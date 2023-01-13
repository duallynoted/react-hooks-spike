import React from 'react';
import './previous.scss';
import PreviouslyUsed from './components/previously-used';

function Previous() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Use the Preeevs</h2>
        <PreviouslyUsed />
      </header>
    </div>
  );
}

export default Previous;
