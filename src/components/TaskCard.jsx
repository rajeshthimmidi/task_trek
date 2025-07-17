import React from 'react'
import Tag from './Tag'
import './TaskCard.css'
import removeIcon from './../assets/delete.png'

const TaskCard = ({ task,setTasks,globalIndex }) => {
  console.log("tasks in TaskCard", task);
  const handleDelete = () => {
    setTasks(tasks => tasks.filter((_, i) => i !== globalIndex));
  }
  return (
    <div className='task-card' draggable="true">
        <h2 className="task-card-title">
         {task.task}
        </h2>
        <div className='card-bottom-line'>
                        <div className='task-card-tags'>
                          {task.tags.map((tag, index) => (
                            <Tag key={index} tagName={tag} selected={true} />
                          ))}
                        </div>
                        <div className='task-card-remove-icon'>
                            <img className='remove-icon' src={removeIcon} alt="Remove Icon" onClick={handleDelete}/>
                        </div>
                    </div>
                </div>
              )
}

export default TaskCard