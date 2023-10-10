import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count: 0
  }
  add = () => {
    this.setState(current => ({count : current.count +1}));
  };
  minus = () => {
    this.setState(current => ({count : current.count -1}));
  }
  componentDidMount(){
    console.log("Component rendered");
  }
  componentDidUpdate(){
    console.log("I just updated");
  }
  componentWillUnmount(){
    console.log("Goodbye, bye mom")
  }
  render(){
    console.log("I'm rendering");
    return(
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onCLick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
