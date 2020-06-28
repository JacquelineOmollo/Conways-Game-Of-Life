import React, {useState} from "react";


// class NextGen extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
  

//   increment(){
//     setState({
//       this.state.count:this.state.count + 1
//     })
//   }
    
//   render() {
//     return (
//       <>
//         <button onClick={this.handleClick}></button>
//         <h3>Generation: {this.state.generation}</h3>
        
        

//       </>
//     )
//   }
// }
// export default NextGen

function NextGen() {
  // Declare a new state variable, which we'll call "count" 
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default NextGen

