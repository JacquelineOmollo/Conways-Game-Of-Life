import React, {useState} from 'react';
import './App.css';
import Grid from "../src/components/grid";
import About from "../src/components/about";

function App() {
  const [generations] = useState()
  return (
    <div className="App">
     <h1>The Game of Life</h1>
      <Grid/>
  <h3>Generations: {generations}</h3>
      <About/>
      
    </div>
  );
}

export default App;
