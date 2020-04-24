import React, {Component} from 'react'
class Count extends Component {
    counter = 0
    constructor() {
        super()
        this.state = {
            number: this.count
        }
    }

    increment() {
        this.setState({
            number: ++(this.count)
        })
    }
    
    decrement() {
        if(this.count > 0){
        this.setState({
            number: --(this.count)
        })
    }
    }

    render() {
        return (
            <div class="container"> 
                <button className="btn-decrement" onClick={() => this.decrement()}><b>-</b></button>
                <div class="number" id='number'>{this.state.number}</div>
                <button className="btn-decrement btn-decrement--increment " onClick={() => this.increment()}><b>+</b></button>
            </div>
        )
    }
}

export default Count