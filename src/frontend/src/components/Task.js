import { FaTimes } from 'react-icons/fa'
import { FcCheckmark } from 'react-icons/fc'

const Task = ({ task, onDelete, onToggle, onComplete }) => {
    return (
        <div
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
                {task.text}{' '}
                <FcCheckmark
                    className="checkmark"
                    style={{ color: 'green', cursor: 'pointer' }}
                    onClick={() => onComplete(task.id)}
                />
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
