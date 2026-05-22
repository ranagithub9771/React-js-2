import { Component } from "react";

export default class LifeCycleCBC extends Component {
  constructor() {
    super();
    console.log("I am constructor");
    this.state = { count: 0 };
  }
Increament = ()=> this.setState({count:this.state.count +1})

  componentDidMount() {
    console.log("I am ComponentDidMount");
    this.IntervalId = setInterval(() => {
      console.log("api called");
    }, 2000);
  }
  componentDidUpdate(){
    console.log("component updated");
}
componentWillUnmount(){
    console.log("component is going to unmount ");
    clearInterval(this.IntervalId);

    
}

  render() {
    console.log("I am render ");
    return (
      <div>
        <h1>Count is :{this.state.count}</h1>
        <br />
        <button onClick={this.Increament}>Increament</button>
      </div>
    );
  }
}
