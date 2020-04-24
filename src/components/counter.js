import React,{Component}from 'react'



class Counter extends Component{

    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
increment(){
    this.setState({
        count:this.state.count+1
    },()=>{console.log('callback value',this.state.count)})
    
    console.log(this.state.count);
}
decrement(){
    this.setState(prevState=>({
        count:prevState.count-1
    }))
    console.log(this.state.count)
}


    render(){
        return(
            <div>
            
               
               <div className="btn">
               <button onClick={()=>this.decrement()}>-</button>
              <span className="value">  {this.state.count}</span>
               <button onClick={()=>this.increment()}>+</button>
               </div>
               </div>
        )   
    }
}

export default Counter