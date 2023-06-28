import { useState } from 'react';
import reactLogo from './assets/react.svg';
import FitnessSection from './components/fitness-section';
import './App.css';

function App() {
  return (
    <>
      <div className="header">
        <img 
          src="https://img.freepik.com/free-vector/flat-design-fitness-logo-template_23-2148203461.jpg?w=1480&t=st=1687974464~exp=1687975064~hmac=24004e6870fec9aa342a3ab278e10e9905145d6647149c272c35e50c27bb4e00" 
          className="logo" 
          alt="logo" 
        />
        <div className="Title">
          Training Plan
        </div>
      </div>
      <FitnessSection/>
    </>
  );
}

export default App;
