import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Wellcome from './Component/Wellcome';

function App() {
  return (
    <div className="App">
      <Wellcome name='Admin'/>
    </div>
  );
}

export default App;
