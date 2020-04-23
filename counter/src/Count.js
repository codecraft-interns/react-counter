import React, { Component } from 'react';
import './App.css';


class Count extends Component {
    add=()=>{
      let number = document.getElementById('number');
      let value = number.innerHTML;
      number.innerText = ++value;
  }
  render() {
    return (
          <div class = "container"> 
               <div class = "button-minus" onClick={()=>this.minus()}> - </div>
               <div class = "number" id ='number'> 0 </div>
               <div class = "button-minus button-minus--add" onClick={()=>this.add()}> + </div>
           </div>
         );

      //    render() {
      //     return (
      //         <div>
      //         <button className="btn" onClick={()=>this.add()}>+</button>
      //         {this.state.count}
      //         <button className="btn" onClick={()=>this.minus()}>-</button>    
      //         </div>
      //     )
      // }
   
}
}
// let  Count=() => {
// let add=()=>{
//   let number = document.getElementById('number');
//   let value = number.innerHTML;
//   number.innerText = ++value;
  
// }
// let minus=() => {
//   let number=document.getElementById('number');
//   let value = number.innerHTML;
//   if(value > 0){
//   number.innerText = --value;
//   }
// }

// return (
//     <div class = "container"> 
//          <div class = "button-minus" onClick = {minus}> - </div>
//          <div class = "number" id ='number'> 0 </div>
//          <div class = "button-minus button-minus--add" onClick = {add}> + </div>
//      </div>
//    );
//  }

 export default Count;