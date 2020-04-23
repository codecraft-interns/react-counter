import React, { Component } from 'react'
 class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    add(){
        this.setState({
            count:this.state.count+1
        })
    }
    
    minus(){
        this.setState({
            count:this.state.count-1
        })
    }
    render() {
        return (
            <div>
            <button className="btn" onClick={()=>this.add()}>+</button>
            {this.state.count}
            <button className="btn" onClick={()=>this.minus()}>-</button>    
            </div>
        )
    }
}

export default Counter
