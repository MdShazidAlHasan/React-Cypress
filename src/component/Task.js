import {FaTimes} from 'react-icons/fa'

const Task = ({task, ondelete, ontoggle}) => {
  return (
    <div  
        className = {`task ${task.reminder?'reminder':''}`} 
        onDoubleClick={()=>ontoggle(task.id)}
        >
        <h3>
            {task.text} <FaTimes onClick = {()=>ondelete(task.id)} style={{color:'red', cursor:'pointer'}}/>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task 