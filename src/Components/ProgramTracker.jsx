import React from 'react'

export default function ProgramTracker({ tasks }) {
      const completedTasks = tasks.filter((t) => t.completed).length;
        const totalTasks = tasks.length;
       return (
        <div className='progress-tracker'>
          <p>
            {completedTasks} of {totalTasks} tasks completed  
          </p>
          <div className='progress-bar'>
            <div
              className='progress'
              style={{ width: totalTasks ? `${(completedTasks / totalTasks) * 100}%` : '0%' }}
            ></div>
          </div>  
        </div>
  );
} 
