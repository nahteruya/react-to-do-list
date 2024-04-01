import { useState, createContext } from 'react';

import Input from "./Input/Input";
import ItemList from './ItemList/ItemList';
import "./App.css";

export const ToggleDoneContext = createContext();

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks((prevTasks) => [...prevTasks, { name: taskName, done: false}]);
  }

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_,i) => i !== index))
  }

  const toggleDone = (index) => {
    setTasks(prevTasks => prevTasks.map((task,i) => {
      if(i === index) {
        return {...task, done: !task.done};
      } else {
        return task;
      }
    }))
  }

  const moveTaskUp = (index) => {
    if(index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  const moveTaskDown = (index) => {
    if(index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return(
    <div className="pageContent">
      <h1>To-Do List</h1>
      <Input onAdd={addTask}/>
      { tasks.length > 0 && 
        <ul>
        {tasks.map((task, index) => 
          <ItemList 
            key={index} 
            id={index} 
            task={task} 
            onToggle={toggleDone} 
            onDelete={deleteTask} 
            onMoveUp={moveTaskUp} 
            onMoveDown={moveTaskDown} 
          />
        )}
      </ul>
    }
    </div>
  )
}

export default App
