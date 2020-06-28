import React, {useState, useCallback, useRef} from "react";
import {produce} from "immer";
import {Button, ButtonGroup} from "reactstrap";
import NextGen from "./generation";
import  CountUp, {useCountUp}  from 'react-countup';


const theRows = 25;
const theCols = 30;
const dead = 0;
const alive = 1;
const colors = ["black", "blue", "green", "purple"];

const Grid = () => {

    //Eight operations of grid 
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
    
    // generates an empty grid in the dead state 
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
    const [generation, setGeneration] = useState(0)
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

        
                    // checks neighbors to see if it dies or lives
                    if (neighbors < 2 || neighbors > 3){
                        anotherGrid[i][j] = 0
                    } else if (cell[i][j] === 0 && neighbors === 3) {
                        anotherGrid[i][j] = 1
                    }
               }
            } 

        }) 

        
           
    })

    setGeneration((prevGen) => {
        const next = prevGen + 1
        return next
    })
    // speed of simulation demo
    setTimeout(runDemo,100)
    }, [operations])

    
    
return(
<>
    {/* Button function */}
    
    <ButtonGroup className="btn_group" >
    <Button color="success"
     onClick={() => {
       setRunning(!running);
        if (!running) {
            runRef.current = true;
            runDemo( );
        }
        }} >
        {running ? "stop" : "start"}
       </Button>
  
   <Button color="success" 
        onClick={() => {
        const rows = [];
        for (let i = 0; i < theRows; i++) {
            rows.push(
            Array.from(Array(theCols), () => (Math.random() > 0.7? alive : dead))
            );
        }
        setGrid(rows);
        }}
    >
        random
    </Button>

    <Button color="success" 
        onClick={() => {
        setGrid(generateEmptyGrid())
        }}
    >
    clear
    </Button>
    <h3>Generation: {generation}</h3>
    </ButtonGroup>
   
   
 {/* This is where the grid maps to create a copy, onClick with dead of alive with random colors  */}
     <div className="box"> 
    <div 
        style={{
        display: "grid",
        gridTemplateColumns: `repeat(${theCols}, 20px)`
        }}
    >
        {grid.map((rows, i) => 
            rows.map((col, j) => (
        <div className="grid"
            key={`${i}_${j}`}
            onClick={() => {
            const anotherGrid = produce(grid, gridCopy => {
               gridCopy[i][j] = grid[i][j] ? dead : alive
               
            })
            setGrid(anotherGrid)
         }}

        style={{
            width: 20, 
            height: 20, 
            backgroundColor: grid[i][j] ? colors[Math.floor(Math.random(255) * colors.length)] : undefined,
            border: "solid 1px rgb(6, 68, 6)" }}
        />
        ))
    )}
    </div>
    </div> 
</>
  )
}

  
export default Grid

