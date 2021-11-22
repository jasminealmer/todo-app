import React, {useState} from 'react';
import './TodoList.css';
import TodoTask from "./TodoTask";

function TodoList({tasks, handleStatusChange, handleRemoveChange, handleEditChange}) {

    const todoList = tasks.map(task => <TodoTask handleStatusChange={handleStatusChange} handleRemoveChange={handleRemoveChange} handleEditChange={handleEditChange}  task={task}/>)
    return (

        <div className="OuterBox">
            {todoList}
        </div>
    );
  }
  
  export default TodoList;