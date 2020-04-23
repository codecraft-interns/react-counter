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
        <button onClick={()=>this.increament(1,'One Increment')}>Increment 1</button>
        <button onClick={()=>this.increament(5,'Five Increment')}>Increment 5</button>
        <button onClick={()=>this.increament(10,'Ten Increment')}>Increment 10</button>
            </div>
        )
    }
}

export default design
