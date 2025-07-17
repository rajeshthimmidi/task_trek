import React,{useState} from 'react'
import './TaskForm.css'
import Select from '@mui/material/Select';  
import { MenuItem } from '@mui/material';
import Tag from './Tag';

const TaskForm = ({ setTasks }) => {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('To Do');
  const [tags, setTags] = useState([]);

  const handleSubmit =(e) => {
    e.preventDefault();
    setTask('');
    setTags([]);
    setStatus('To Do');
    setTasks(prevTasks => [...prevTasks, { task, status, tags }]);

  }
  const selectTag = (tagName) => {
  
    if (tags.includes(tagName)) {
      setTags(tags.filter(tag => tag !== tagName));
    }
    else {
      setTags([...tags, tagName]);
    } 
  } 

  const checkTags = (tagName) => {
    return tags.includes(tagName);
  }
  return (
    <div className="task-form-container">
        <form className="task-form-header" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your task" value={task} onChange={(e) => setTask(e.target.value)} required/>


      <div className="task-lower-line">
          <div className="task-form-tags">
              <Tag tagName="HTML" selectTag={selectTag} selected={checkTags("HTML")}/>
              <Tag tagName="CSS" selectTag={selectTag} selected={checkTags("CSS")}/>
              <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTags("JavaScript")}/>
              <Tag tagName="React" selectTag={selectTag} selected={checkTags("React")}/>
          </div>
        <div className="task-form-submit">
            
            <Select className='task-select' onChange={(e) => setStatus(e.target.value)} value={status}>        
                <MenuItem value="To Do">To Do</MenuItem>
                <MenuItem value="Doing">Doing</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
            </Select>
            <button className="task-submit-button">+Add Task</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default TaskForm;