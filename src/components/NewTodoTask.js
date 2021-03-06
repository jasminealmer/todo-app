import React, { useState } from 'react';
import "./NewTodoTask.css"

function NewTodoTask({ addTodoTask }) {

    const [text, setTask] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodoTask({ text })
        setTask('')
    }

    return (
        <div className="label">
            <p>Add a new fun task to the app:</p>
            <div className='NewTodoTask'>
                <form onSubmit={handleSubmit} >
                    <label>
                        <input
                            className="form_field"
                            type="text"
                            value={text}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    </label>
                    <input className="buttonStyling" type="submit" value="+"/>
                </form>
            </div>
        </div>

    );
}

export default NewTodoTask;