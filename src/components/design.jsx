import React, { Component } from 'react'
import './css/style.css'
    class design extends Component {
        constructor(){
            super()
            this.state={
                counter:0
            }
        }
        increament(value){
                this.setState({
                    counter:this.state.counter+value,
                })
        }
    render() {
        return (
           
            <div className="container">
                <div className="subcontainer">
              <button onClick={()=>this.increament(-1)}>-</button>
                <p>{this.state.counter}</p>
              <button onClick={()=>this.increament(1)}>+</button>
            </div>
            </div>
           
        )
    }
}

export default design
