import React from 'react'

export default function TaskList({ tasks, updateTasks, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    updateTasks(updatedTasks);
  };

  const formatDue = (dateTime) => {
    if (!dateTime) return 'No due time';
    const date = new Date(dateTime);
    return date.toLocaleString();
  };

  const isOverdue = (dateTime) => {
    if (!dateTime) return false;
    return new Date(dateTime) < new Date();
  };

  const isDueSoon = (dateTime) => {
    if (!dateTime) return false;
    const diff = new Date(dateTime) - new Date();
    return diff > 0 && diff <= 3600000;
  };

  return (
    <ul className='task-list'>
      {tasks.map((task, index) => {
        const overdue = !task.completed && isOverdue(task.dueDateTime);
        const dueSoon = !task.completed && !overdue && isDueSoon(task.dueDateTime);

        return (
          <li key={index} className={`${task.completed ? 'completed' : ''} ${overdue ? 'overdue' : ''}`}>
            <div className='task-detail'>
              <span>{task.text}
                <small>({task.priority}, {task.category})</small>
              </span>
              <div className='task-meta'>
                <span>Due: {formatDue(task.dueDateTime)}</span>
                {overdue && <span className='badge overdue-badge'>Overdue</span>}
                {dueSoon && <span className='badge due-soon'>Due soon</span>}
              </div>
            </div>

            <div>
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? 'Undo' : 'Complete'}</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        );
      })}
    </ul>
  )
}
