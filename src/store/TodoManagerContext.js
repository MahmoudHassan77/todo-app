import React,{  createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const TodoManagerContext = createContext()

const TodoContextProvider = props => {

  const [tasks, setTasks] = useState([
    {
        id:uuidv4(),
        title:"task1",
        status:false
    },
    {
        id:uuidv4(),
        title:"task2",
        status:false
    }
  ])

  // Add tasks
  const addTask = title => {
    setTasks([...tasks, { title, id: uuidv4() }])
  }

  // Remove tasks
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const taskDone = id => {
    const newTasks = tasks.map(task=>{
        if(task.id === id) return {...task,status:!task.status};
        return task;
    });
    setTasks(newTasks);
  }


  return (
    <TodoManagerContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        taskDone
      }}
    >
      {props.children}
    </TodoManagerContext.Provider>
  )
}

export default TodoContextProvider
