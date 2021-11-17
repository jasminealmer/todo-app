import React, {useState} from 'react';
import "./TodoTask.css"

function TodoTask({task}) {
    return (
        <div className="TaskBox">
            {task.text}
        </div>
    );
  }
  
  export default TodoTask;