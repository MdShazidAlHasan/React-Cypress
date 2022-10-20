import Header from './component/Header'
import Task from './component/Tasks';
import {useState, useEffect} from 'react'
import AddTask from './component/AddTask';
import Footer from './component/Footer';
import About from './component/About';
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  const [showAddTask, setshowAddTask] = useState(false)
  const [tasks, setTask] = useState([
    
      {
        text: "do breakfast ",
        day: "Jan 2 at 8:00am",
        reminder: true,
        id: 1
      },
      {
        text: "do launch",
        day: "Jan 2 at 2:00pm",
        reminder: false,
        id: 2
      },
      {
        text: "do diiner ",
        day: "Jan 2 at 9:00pm",
        reminder: false,
        id: 3
      }
    ])

  //Add Task
  const addTask= (object)=>{
    const id= Math.floor(Math.random()*10000)+1
    const newTask = {id, ...object}
    // const res = await fetch(`http://localhost:5000/tasks`,
    //                   {method:'POST',
    //                   headers:{
    //                     'Content-type':'application/json'
    //                   },
    //                   body:JSON.stringify(object)
    //                 }) 
    // const newTask =await res.json()
    setTask([...tasks, newTask])
  }

  // useEffect(()=>{
  //   const getTasks= async ()=>{
  //     const tasksFromServer= await fetchTasks()
  //     setTask(tasksFromServer)
  //   }
  //   getTasks()
  // }, [])

  // //fetch Tasks from server
  // const fetchTasks=async()=>{
  //   const res = await fetch('http://localhost:5000/tasks')
  //   const data = await res.json()
  //   return data
  // }
    // //fetch single Task from server
    // const fetchTask=async(id)=>{
    //   const res = await fetch(`http://localhost:5000/tasks/${id}`)
    //   const data = await res.json()
    //   return data
    // }

  //delete task
  const deleteTask =  (id) =>{
// await fetch(`http://localhost:5000/tasks/${id}`, {method:'DELETE'}) 
  setTask(tasks.filter((task)=>task.id !==id))
  }

  //toggle reminder
  const toggleReminder = (id)=>{
  //   const taskTotoggle = await fetchTask(id)
  //   const updTask= {...taskTotoggle, reminder:!taskTotoggle.reminder}
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`,{
  //                     method:'PUT',
  //                     headers:{
  //                       'Content-type':'application/json'
  //                     },
  //                     body:JSON.stringify(updTask)
  // })
  // const data = await res.json()
    setTask(tasks.map((task)=>
        task.id===id?
        {...task, reminder:!task.reminder}:task
    ))
  }
  return (
    <Router>
      <div className='container' data-testid='container'>
        {showAddTask &&<AddTask onAdd = {addTask}/>}


        <Header onAdd={()=>setshowAddTask(!showAddTask)} showAddTask = {showAddTask}/>
        
        {tasks.length>0?(
        <Task 
          tasks = {tasks} 
          ondelete= {deleteTask} 
          ontoggle={toggleReminder} />
        ):(<p style={{ color:'red'}} >No task available</p>)}

      <Footer />
      </div>
    </Router>

    );
}

export default App;
