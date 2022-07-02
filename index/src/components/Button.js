import React from 'react'

export const Button = ({color, text,showadd}) => {
    const onClick=()=>{
        console.log('Clicked')
        
    }
  return (
    <button onClick={showadd} className={color} >{text}</button>
  )
}

export default Button