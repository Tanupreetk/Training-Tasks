import React from "react"
import {useState} from "react";
import './App.css'

const App = ()=>{
  let[count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1)
    
  }
  const start=()=>{
    setCount(count=0)
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment} id="btn1">
        Increment    
      </button>
      <button onClick={start} id="btn2">
        Reset
      </button>
      <button onClick={decrement} id="btn3">
        Decrement
      </button>
    </div>
  );
};
export default App;
