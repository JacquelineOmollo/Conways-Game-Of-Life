import React from "react";


class NextGen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      generation: 0
      
    }
    this.setGeneration = this.setGeneration.bind(this)
  }

  setGeneration() {
    this.setGeneration((state) =>({
      generation: state.generation + 1
    }))
  }
    
  render() {
    return (
      <>
      
        <h3>Generation: {this.state.generation}</h3>
        
        

      </>
    )
  }
}
export default NextGen