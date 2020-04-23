import React, { Component } from 'react'
import './css/style.css'
    class design extends Component {
        constructor(){
            super()
            this.state={
                message:'No Button clicked',
                counter:0
            }
        }
        increament(value,detail){
                this.setState({
                    counter:this.state.counter+value,
                    message:detail
                })
        }
    render() {
        return (
            <div>
               <h1 className="header-part">Counter using React</h1>
               <hr></hr>
               <h1 className="content">{this.state.counter}</h1>
        <h1 className="status">{this.state.message}</h1>
        <button onClick={()=>this.increament(-1,'One Decrement')}>-</button>
        <h2> -1 or +1</h2>
        <button onClick={()=>this.increament(1,'One Increment')}>+</button>
        <button onClick={()=>this.increament(-5,'Five Decrement')}>-</button>
        <h2>-5 or +5</h2>
        <button onClick={()=>this.increament(5,'Five Increment')}>+</button>
        <button onClick={()=>this.increament(-10,'Ten Decrement')}>-</button>
        <h2>-10 or +10</h2>
        <button onClick={()=>this.increament(10,'Ten Increment')}>+</button>
            </div>
        )
    }
}

export default design
