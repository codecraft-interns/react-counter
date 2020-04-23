import React from 'react';
import './App.css';

function Count() {
let increment=()=>{
  let number=document.getElementById('number');
  let val=number.innerHTML;
  number.innerText=++val;
  
}
let decrement=()=>{
  let number=document.getElementById('number');
  let val=number.innerHTML;
  if(val>0){
  number.innerText=--val;
  }
}

  return (
   <div class="container"> 
        <div class="button-decrement" onClick={decrement}>-            
        </div>
        <div class="number" id='number'>0</div>
        <div class="button-decrement button-decrement--increment" onClick={increment}>+</div>
    </div>
  );
}
export default Count;
