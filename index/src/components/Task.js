import React from 'react'
import { useState } from 'react'
const Task = ({task,onDelete,onTog}) => {
  const [isActive, setActive] = useState("false");
  
  const cls=()=>
  {   
    onDelete(task.id)
    console.log(isActive);
    
  } 
  const tog=()=>{
    onTog(task.id);
    console.log(isActive);
    setActive(!isActive)
  }
  return (
    <div className='task'>
      <div className='row'>
        <div className='col-6'>
        <h3 className={isActive ? 'default': 'remainder'} onClick={tog}> {task.name} </h3>
        </div>
        <div className='col-6'>
        <button  type="button" className="btn-close  " aria-label="Close" onClick={cls}></button>

        </div>
      </div>
     

    </div>
  )
}

export default Task