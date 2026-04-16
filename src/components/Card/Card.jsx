import './Card.scss';

const Card = ({ taskData, onDone, onRemove, onEdit }) => {
    return (
        <article className={`card${taskData.done ? ' card_type_done' : ''}`}>
            <h2 className="card__title">
                <button 
                    onClick={() => onDone(taskData.id)} 
                    type="button" 
                    className="card__button card__button_type_done"
                    aria-label="Mark as done">
                </button>
                {taskData.title}
            </h2>
            <p className="card__description">{taskData.description}</p>
            <span className={`card__priority card__priority_${taskData.priority}`}>{taskData.priority}</span>
            <div className="card__tools">
                <button 
                    onClick={() => onEdit(taskData)} 
                    type="button"
                    className="card__button card__button_type_edit"
                    aria-label="Edit task"
                >
                </button>
                <button 
                    onClick={() => onRemove(taskData.id)} 
                    type="button"
                    className="card__button card__button_type_remove"
                    aria-label="Remove task"
                >
                </button>
            </div>
        </article>
    );
};

export default Card;