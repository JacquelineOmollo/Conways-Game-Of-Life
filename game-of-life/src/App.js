import React from 'react';
import './App.css';
import Grid from "../src/components/grid";
import About from "../src/components/about";




function App() {
  
  return (
    <div className="App">
     <h1>The Game of Life</h1>
      <Grid/>
      <About/>
    </div>
  );
}

export default App;
