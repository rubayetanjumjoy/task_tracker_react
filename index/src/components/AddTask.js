import React from 'react'
import { useState } from 'react'


const AddTask = ({addtask}) => {
  const [name, setName]=useState( '')
  const [id, setId]=useState( '')
  const [remainder, setRemainder]=useState(false)
  let add=(e)=>{
    e.preventDefault();
    addtask(name,id,remainder);
  }

  return (
    <div>
    <form onSubmit={add}>
    <div className='row'>
    <div class="form-group col-6">
    <label for="exampleInputEmail1">Your Name</label>
    <input  value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    </div>
    </div>
    <div className='row mt-2'>
    <div class="form-group col-6">
    <label for="exampleInputPassword1">Give Your ID</label>
    <input value={id}  onChange={(e)=>setId(e.target.value)}  type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
    </div>
    </div>
    <div className='row mt-2'>
    <div class="form-check m-3">
    <input value={remainder}  onChange={(e)=>setRemainder(!remainder)} type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
   </div>
    </div>
     
     
   
   <button   type="submit" class="btn btn-primary col-6" >Submit</button>
  
  
    
   </form>
   </div>
  )
}

export default AddTask