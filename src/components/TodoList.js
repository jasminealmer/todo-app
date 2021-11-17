import React, {useState} from 'react';
import './TodoList.css';
import TodoTask from "./TodoTask";

function TodoList({tasks}) {

    const todoList = tasks.map(task => <TodoTask task={task}/>)

    return (

        <div className="OuterBox">
            <p>outerbox</p>
            {todoList}
        </div>
    );
  }
  
  export default TodoList;