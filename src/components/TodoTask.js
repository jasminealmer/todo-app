import React, { useState } from 'react';
import "./TodoTask.css"
import Checked from "./img/checked.png"
import Unchecked from "./img/unchecked.png"
import Trash from "./img/trash-can.png"

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
        setTask('')
    }

    return (

        <div className="TaskBox">
            <div className="left-box">
                <div onClick={handleChange} className="task-status">
                    {task.completed == true ? <img src={Checked}/> : <img src={Unchecked}/> }
                </div>
                <div className={`task-text ${task.completed && "line-through"}`}>
                    {task.text}
                </div>
            </div>
            <div className="right-box">
                <form onSubmit={handleEdit} >
                    <label>
                        <input className="input-field"
                            type="text"
                            value={text}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    </label>
                    <input className="buttonStyling" type="submit" value="Edit" />
                </form>
                <div className="trash-can" onClick={handleRemove}><img src={Trash}/></div>
            </div>
        </div >
    );
}

export default TodoTask;