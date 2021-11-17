import React, {useState} from 'react';
import './App.css';
import TodoTitle from './components/TodoTitle';
import TodoList from './components/TodoList';
import NewTodoTask from './components/NewTodoTask';

const initialState = [{id: 1, text: "task1"}, {id: 2, text: "task2"}]

function App() {
  
  const [tasks, setTask] = useState(initialState)

  //skapa funktion som lägger till en ny todo i todos, skicka funktionen till NewTodoTask
  function addTodoTask(){

  }

  return (
    <div>
      <TodoTitle />
      <TodoList tasks={tasks}/>
      <NewTodoTask addTodoTask={addTodoTask}/>
    </div>
  );
}

export default App;
