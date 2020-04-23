import React,{Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }

  add=()=>{
    this.setState({count:this.state.count+1});
  }

  subtract=()=>{
    this.setState({count:this.state.count-1});
  }
  render(){
    const disableBttn =this.state.count==0
    return(
         <div className="app-container">
         <button  disabled={disableBttn} onClick={this.subtract} className="bttn bttn-reducer">-</button>
         <div className="count">{this.state.count}</div>
         <button onClick={this.add} className="bttn bttn-adder">+</button>
         </div>
    );
  }
}

export default App;
