import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
const App = () => {
    const [tasks,setTasks]= useState([]);
    useEffect(()=>{
      let myTasksfromLocalStorage = JSON.parse(localStorage.getItem("MyTasks"))
      if(myTasksfromLocalStorage){
        setTasks(myTasksfromLocalStorage);
      }
    }
    );
    const add_task = () => {
      const inputEl = document.getElementById("task-add");
      const newTask = inputEl.value.trim();
      if (newTask) {
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem("myTasks", JSON.stringify(updatedTasks));
        inputEl.value = ""; // Clear input field
      }
    };
    const delete_task=(index)=>{
        const updatedTasks = tasks.filter((task,i)=>i!==index);
        setTasks(updatedTasks);
    }
      
    

    return (
      <div>
      <h1>To-do List</h1>
      <input type="text" id="task-add" placeholder="Enter a task" />
      <button id="add-btn" onClick={add_task}>Add to list</button>
      <ul id="task-list">
        {tasks.map((task,index)=>(
          <li key={index}>
            <input 
            type="checkbox" onClick={()=>delete_task(index)} />
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
