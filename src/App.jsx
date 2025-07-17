import React,{useState, useEffect} from 'react'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import './App.css'
import todo from "./assets/direct-hit.png"
import doing from "./assets/glowing-star.png"
import done from "./assets/check-mark-button.png"

const initialTasks = JSON.parse(localStorage.getItem("task")) || [];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {localStorage.setItem("task",JSON.stringify(tasks))},[tasks]);

  return (
    <div>
      <TaskForm setTasks={setTasks}/>    
      <div className="task-column-container">
<TaskColumn
  title="To Do"
  icon={todo}
  tasks={tasks
    .map((task, idx) => ({ ...task, globalIndex: idx }))
    .filter(task => task.status === "To Do")}
  setTasks={setTasks}
/>
        <TaskColumn
          title="Doing"
          icon={doing}
          tasks={tasks
            .map((task, idx) => ({ ...task, globalIndex: idx }))
            .filter(task => task.status === "Doing")}
          setTasks={setTasks}
        />
        <TaskColumn
          title="Done"
          icon={done}
          tasks={tasks
            .map((task, idx) => ({ ...task, globalIndex: idx }))
            .filter(task => task.status === "Done")}
          setTasks={setTasks}
        />
      </div>
    </div>
  )
}

export default App