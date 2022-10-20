import Task from "./Task"


const Tasks = ({tasks, ondelete, ontoggle}) => {

    return (
        <div data-testid='showtask'>
        {tasks.map((task) => (
            <Task 
                key={task.id}
                task = {task} 
                ondelete= {ondelete}
                ontoggle= {ontoggle}
            />
            ))}
        </div>
    )
}

export default Tasks