import React from 'react'
import './TaskColumn.css'
import TaskCard from './TaskCard'
const TaskColumn = ({title, icon, tasks, setTasks}) => {
  console.log("tasks in TaskColumn", tasks);
  return (
    <session className="task-coloumn">
        <h2 className='task_column_header'>
            <img className = "task_column_icon" src={icon}/>
            {title}
        </h2>
        {tasks.map((task, index) => (
            <TaskCard key={index} task={task} setTasks={setTasks} globalIndex={task.globalIndex}/>
        ))}
    </session>
  )
}

export default TaskColumn