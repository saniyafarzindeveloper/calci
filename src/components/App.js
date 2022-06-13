import React from 'react';
import './App.css';
import Output from './Output';
import Keypad from './Keypad';


export default function App() {
  return (
    <div className='calculator-main-app' >
    <Output />

    <div className='keypad'>
    <Keypad  />
    </div>
    </div>
  );
}
