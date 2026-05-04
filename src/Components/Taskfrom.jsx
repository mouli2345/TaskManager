import React, { useState } from 'react'

export default function Taskform({ addTask }) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('low');
    const [category, setCategory] = useState('general');
    const [dueDateTime, setDueDateTime] = useState(() => new Date().toISOString().slice(0, 16));

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;

        addTask({
          text: task,
          priority,
          category,
          dueDateTime,
          completed: false,
        });

        setTask('');
        setPriority('low');
        setCategory('general');
        setDueDateTime(new Date().toISOString().slice(0, 16));
    }

  return (
    <form  onSubmit={handlesubmit} className='task-form'>
        <div className="tns">
            <input type='text' placeholder='Enter the task' value={task} onChange={(e) => setTask(e.target.value)}/>
            <button type='submit'>Add Task</button>
        </div>

        <div className="btns">
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="general">General</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
            </select>
        </div>

        <div className="btns">
            <input
              type='datetime-local'
              value={dueDateTime}
              onChange={(e) => setDueDateTime(e.target.value)}
              className='due-input'
            />
        </div>
    </form>
  )

}


