import React, { useState } from 'react';
import "./TodoTask.css"

function TodoTask({ task, handleStatusChange, handleRemoveChange, handleEditChange }) {

    const [text, setTask] = useState("")

    const handleChange = () => {
        handleStatusChange(task.id);
    }

    const handleRemove = () => {
        handleRemoveChange(task.id);
    }

    const handleEdit = (event) => {
        event.preventDefault();
        handleEditChange(task.id, text)
        alert('The task has been editedsuccessfully!')
    }

    return (

        <div className="TaskBox">
            <div className="left-box">
                <div className="task-text">
                    {task.text}
                </div>
                <div className="task-status">
                    {task.completed == true ? 'completed' : 'not completed'}
                    <button onClick={handleChange}>Complete</button>
                </div>
            </div>
            <div className="right-box">
                <form onSubmit={handleEdit} >
                    <label>
                        Edit task:
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Update" />
                </form>
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div >
    );
}

export default TodoTask;