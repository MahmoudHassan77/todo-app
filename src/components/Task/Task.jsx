import React, { useContext } from 'react'
import { TodoManagerContext } from '../../store/TodoManagerContext';
import style from "./Task.module.css";

const Task=({task})=> {
    const {removeTask, taskDone} = useContext(TodoManagerContext);
  return (
      <li className={style.taskContainer}>
        <>
             <input type="checkbox" onChange={()=> taskDone(task.id)} />
             <span className={`${style.title} ${task.status && style.checked}`}>{task.title.length >10?task.title.slice(0,10)+"...":task.title}</span>
        </>
             <button className={style.delBtn} onClick={() => removeTask(task.id)}>Delete</button>
     </li>

  );
}

export default Task