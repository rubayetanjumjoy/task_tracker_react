import React from 'react'
import Task from './Task'

export const Tasks = ({tasks,onDelete,onTog}) => {
   
 
    return (
    <div>
        {tasks.map((task)=>(
            <Task key={task.id} task={task} onDelete={onDelete} onTog={onTog}/>
            ))}
    </div>
  )
}

export default Tasks


