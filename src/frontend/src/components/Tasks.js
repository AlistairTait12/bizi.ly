import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle, onComplete }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
