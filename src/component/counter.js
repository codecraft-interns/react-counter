import React, {Component} from 'react'

class Counter extends Component {
    count = 0
    constructor() {
        super()
        this.state = {
            content: this.count
        }
    }

    decrement() {
        this.setState({
            content: --(this.count)
        })
    }

    increment() {
        this.setState({
            content: ++(this.count)
        })
    }

    render() {
        return (
            <div className="container">
                <button className="button" onClick={() => this.decrement()}><b>-</b></button>
                <h3 className="content">{this.state.content}</h3>
                <button className="button" onClick={() => this.increment()}><b>+</b></button>
            </div>
        )
    }
}

export default Counter