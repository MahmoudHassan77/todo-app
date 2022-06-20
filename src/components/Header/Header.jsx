import React, { useContext, useState } from 'react'
import { TodoManagerContext } from '../../store/TodoManagerContext';
import style from "./Header.module.css"

function Header() {
    const {addTask} = useContext(TodoManagerContext);
    const [task,setTask] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(task !== ""){
            addTask(task);
            setTask("");
        }
    }
  return (
    <div className={style.headerContainer}>
        <h2 className={style.header}>Todo List</h2>
        <form className={style.form} onSubmit={handleSubmit}>
          <input value={task} onChange={(e)=>setTask(e.target.value)} type="text" className={style.todotext} placeholder="Enter Items..." />
          <button className={style.btnAdd} type="submit">Add</button>
        </form>
    </div>
  )
}

export default Header