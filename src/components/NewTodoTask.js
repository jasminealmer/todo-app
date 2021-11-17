import React, {useState} from 'react';
import "./TodoTask.css"

function NewTodoTask({addTodoTask}) {

    const [newTask, setTask] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        // anropa propsmetoden med newTask
        alert('The task has been added successfully!')
        // Nollställ input fältet
      }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>
                    Add a new task to your schedule:
                    <input 
                    type="text" 
                    value={newTask}
                    onChange={(e) => setTask(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    );
  }
  
  export default NewTodoTask;