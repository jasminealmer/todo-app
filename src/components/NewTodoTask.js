import React, { useState } from 'react';
import "./NewTodoTask.css"

function NewTodoTask({ addTodoTask }) {

    const [text, setTask] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodoTask({ text })
        alert('The task has been added successfully!')
        setTask('')
    }

    return (
        <div className="label">
            <p>Add a new fun task to the app:</p>
            <div className='NewTodoTask'>
                <form onSubmit={handleSubmit} >
                    <label>
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    </label>
                    <input type="submit" />
                </form>
            </div>
        </div>

    );
}

export default NewTodoTask;