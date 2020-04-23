import React, { Component } from 'react';
import "./css/style.css";

class Counter extends Component{
    constructor(props){
    super(props)
    this.state={
    count:0
    }
    }
    //  Increment to 1 
    incrementOne(){
     this.setState(
         {
        count:this.state.count+1
        }  
    )
    console.log(this.state.count)
    }
//  Decrement to 1
    decrementOne(){
        this.setState(
        {
        count:this.state.count-1}
        )
        console.log(this.state.count)
        }
render(){
return (
<div className="body">
<button className="button" onClick={()=>this.decrementOne()}>-</button>
<div className="counter"><b>{this.state.count}</b></div>
<button className="button" onClick={()=>this.incrementOne()}>+</button>
</div>)
}
}
export default Counter;