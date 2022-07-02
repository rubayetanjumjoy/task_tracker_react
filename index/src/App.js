 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react'
function App() {
  
  const [tasks, setTask]=useState( [

    {   id: 1,
        name: 'Rubaet',
        remainder:true
    },
    {
         id: 2,
         name: 'Kader',
         remainder:true
  
    },
    {   id: 3,
        name: 'Ahmadulla',
        remainder:true  
    },
    {   id: 4,
        name: 'Sheikh',
        remainder:false
      }
  ])
  
  const deleteTask= (id)=> {
    
    setTask(tasks.filter(tasks => tasks.id !== id))
  }
  //togglea
  const toggle= (id)=> {
      setTask(tasks.map((task) => task.id === id ?{...task, remainder:!task.remainder}: task
        )
      
      )
  }
  const addtask= (name,id,remainder)=> {
     let obj={name,id,remainder}
     setTask([...tasks,obj])
     console.log(tasks)
  }
  let setadd=()=>{setShowadd(!showadd)}
  const [showadd, setShowadd]=useState( false)
  return (
    <div className='container'>
      
       <Header showadd={setadd  }/>
      { showadd && <AddTask addtask={addtask} /> } 
      <Tasks  tasks={tasks} onDelete={deleteTask} onTog={toggle}/>
    </div>
  );
}

export default App;
