import React, {useState} from 'react';
import './App.css';
import TodoTitle from './components/TodoTitle';
import TodoList from './components/TodoList';
import NewTodoTask from './components/NewTodoTask';

const initialState = [{id: 1, text: "Städa rummet", completed: false}, {id: 2, text: "Ring girlfriend", completed: true}]

function App() {
  
  const [tasks, setTasks] = useState(initialState)

  //skapa funktion som lägger till en ny todo i todos, skicka funktionen till NewTodoTask
  function addTodoTask(task){
    const id = Math.floor(Math.random() * 10000) + 1
    const completed = false
    const text = {id, completed, ...task}
    setTasks([...tasks, text])
  }

  function handleStatusChange(id) {
    //Skapa en array som innehåller det elementet som matchar på id. Plockar ut det elementet med [0] eftersom arrayen bara är ett element.
    let updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, completed: !task.completed }
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  function handleRemoveChange(id){

    let updatedTasks = tasks.filter(t => t.id !== id)
    setTasks(updatedTasks);
  }

  function handleEditChange(id, text) {
    //Skapa en array som innehåller det elementet som matchar på id. Plockar ut det elementet med [0] eftersom arrayen bara är ett element.
    let updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, text: text }
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }
  
  return (
    <div>
      <TodoTitle />
      <TodoList handleStatusChange={handleStatusChange} handleRemoveChange={handleRemoveChange} handleEditChange={handleEditChange} tasks={tasks}/>
      <NewTodoTask addTodoTask={addTodoTask}/>
    </div>
  );
}

export default App;
