import React, { useContext } from 'react'
import { TodoManagerContext } from '../../store/TodoManagerContext';
import Task from '../Task/Task';
import style from "./Tasks.module.css";


const Tasks=({task})=> {
    const {tasks} = useContext(TodoManagerContext);
  return (
    <ul className={style.tasks}>
    {tasks.map((task, i) => {
      return (
        <Task key={task.id} task={task}/>
      );
    })}
  </ul>
  );
}

export default Tasks