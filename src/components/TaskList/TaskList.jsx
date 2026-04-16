import Card from '../Card/Card';
import Tabs from '../Tabs/Tabs';
import './TaskList.scss';

const TaskList = ({ taskData, onDone, onRemove, onEdit, onFilter }) => {
    return (
        <section className="task-list__wrapper">
            <Tabs categories={['All', 'Active', 'Completed']} onFilter={onFilter} />
            <ul className="task-list">
                {taskData.map(task => (
                    <li className="task-item" key={task.id}>
                        <Card 
                            taskData={task} 
                            onDone={onDone}
                            onRemove={onRemove}
                            onEdit={onEdit}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TaskList;