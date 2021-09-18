import React, {useState} from 'react'
import TaskList from "./components/TaskList"
import { Task } from './Types'
import './App.css'
import TaskInput from "./components/TaskInput";

const initialState: Task[] = [
  {
    id: 2,
    title: '次のTODO',
    done: false
  }, {
    id: 1,
    title: '最初のTODO',
    done: true
  }
]

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App;
