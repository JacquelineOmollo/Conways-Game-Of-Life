import React, {useState, useCallback, useRef} from "react";
import {produce} from "immer";


const theRows = 40;
const theCols = 40;
const dead = 0;
const alive = 1;


const Grid = () => {
    //Eight cells of grid 
    const operations = [
        [0, 1],
        [0, -1],
        [1, 1],
        [-1, 1],
        [-1,-1],
        [1, 0],
        [-1, 0],
        [1, -1]
    ] 

    const generateEmptyGrid = () => {
        const rows = [];
            for(let i = 0; i < theRows; i++){
                rows.push(Array.from(Array(theCols), () => dead));
            }
            return rows;
    }
     
   const [grid, setGrid] = useState(() =>{
        return generateEmptyGrid()
    })
    //Acts as the double buffer setup useing useRef 
    // Makes reference of current and holds state and returns the copy if current is not displayed
    const [running, setRunning] = useState(false)
    const runRef = useRef(running)
    runRef.current = running
    const runDemo = useCallback(() => {
        if (!runRef.current){
            return
        }
    
     // simulation starts here 
     // referance the operations to find neighbors   
    setGrid(cell => {
        return produce(cell, anotherGrid => {
            for(let i = 0; i < theRows; i++){
                for(let j = 0; j <theCols; j++){
                    let neighbors = 0
                    operations.forEach(([x, y]) => {
                        const anotherI = i + x
                        const anotherJ = j + y
                        if (anotherI >= 0 && anotherI < theRows && anotherJ >= 0 && anotherJ < theCols) {
                            neighbors += cell[anotherI][anotherJ]
                        }
                    })
                    // checks neighbors to see if it dies or grows
                    if (neighbors < 2 || neighbors > 3){
                        anotherGrid[i][j] = 0
                    } else if (cell[i][j] === 0 && neighbors === 3) {
                        anotherGrid[i][j] = 1
                    }
               }
            }  
        })    
    })
    // speed of simulation demo
    setTimeout(runDemo, 500)
    }, [])
    
return(
    <>
    <button
        onClick={() => {
        setRunning(!running);
        if (!running) {
            runRef.current = true;
            runDemo();
        }
        }}>
        {running ? "stop" : "start"}
    </button>

    <button
        onClick={() => {
        const rows = [];
        for (let i = 0; i < theRows; i++) {
            rows.push(
            Array.from(Array(theCols), () => (Math.random() > 0.5 ? 1 : 0))
            );
        }
        setGrid(rows);
        }}
    >
        random
    </button>

    <button
        onClick={() => {
        setGrid(generateEmptyGrid());
        }}
    >
    clear
    </button>

    <div
        style={{
        display: "grid",
        gridTemplateColumns: `repeat(${theCols}, 20px)`
        }}
    >
        {grid.map((rows, i) => 
            rows.map((col, j) => (
        <div className="grid"
            key={`${i}-${j}`}
            onClick={() => {
            const anotherGrid = produce(grid, gridCopy => {
                gridCopy[i][j] = grid[i][j] ? dead : alive
            })
            setGrid(anotherGrid)
        }}
        style={{
            width: 20, 
            height: 20, 
            backgroundColor: grid[i][j] ? "blue" : undefined,
            border: "solid 1px white" }}
        />
        ))
    )}
    </div>
    </>
  )
}

  
export default Grid

