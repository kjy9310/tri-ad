import React from 'react';
import { Products } from './Products';

declare global {
  interface Window {
      Seed:any;
  }
}

function App() {
  return (
    <div className="App">
      <Products {...window.Seed}/>
    </div>
  );
}

export default App;
