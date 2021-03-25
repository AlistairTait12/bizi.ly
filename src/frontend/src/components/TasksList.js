import Task from './Task'

const TasksList = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default TasksList