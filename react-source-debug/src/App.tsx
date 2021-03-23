import React from 'react';
import logo from './logo.svg';
import './App.css';
import DomRenderDemo from './dom-render-demo/DomRenderDemo';
import BatchUpdateDemo from './batch-update-demo/BatchUpdateDemo';

function App() {
  return (
    <div className="App">
      {/* <DomRenderDemo></DomRenderDemo> */}
      <BatchUpdateDemo></BatchUpdateDemo>
    </div>
  );
}

export default App;
