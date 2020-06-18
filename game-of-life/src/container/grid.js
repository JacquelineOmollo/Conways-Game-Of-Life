import React, {useState} from "react";

const theRows = 30;
const theCols = 30;
const dead = 0;
const alive = 1;


const Grid = () => {
    const [grid, setGrid] = useState(() =>{
        const rows = [];
        for(let i = 0; i < theRows; i++){
            rows.push(Array.from(Array(theCols), () => dead));

        }
        return rows;
    })
    console.log(grid)
 return(
 <div style={{
     display: "grid",
     gridTemplateColumns: `repeat(${theCols}, 20px)`
 }}>
     {grid.map((rows, i) => 
      rows.map((col, k) => 
     <div 
     key={`${i}-${k}`}
     style={{width: 20, 
        height: 20, 
        backgroundColor: grid[i][k] ? "blue" : undefined,
        border: "solid 1px black" }}/>))}
 </div>
 )
}

export default Grid
