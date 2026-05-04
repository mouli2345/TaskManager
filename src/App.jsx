import React, { useState, useEffect } from 'react'
import TaskList from './Components/TaskList'
import Taskform from './Components/Taskfrom'
import ProgramTracker from './Components/ProgramTracker'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTasks) => {
    setTasks(updatedTasks);
  }

  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <p><i>Welcome to the Task Manager!</i></p>
      <Taskform addTask={addTask}/>
      <TaskList tasks={tasks}
      updateTasks = {updateTask}
      deleteTask = {deleteTask}/>
      <ProgramTracker tasks={tasks}/>

      {tasks.length > 0 && 
      (<button onClick={clearTasks} className='clear-btn'>Clear All Tasks</button>)}

    </div>

  )
}
