import React from 'react'
import Button from './Button'

export const Header = ({title,showadd}) => {
  return (
    <header >
        <div className='row mt-5'>
        <div className='col-6'>
       <h1 >{title}</h1>
       </div>
       <div className='col-6 '>
      <Button  color='btn btn-primary' text='Add' showadd={showadd}></Button>
      
     </div>
     </div>

    </header>
  )
}

Header.defaultProps={
    title: 'Task Tracker'
}

 

 
export default Header