import { useEffect, useState } from 'react';
import './TaskForm.scss';

const TaskForm = ({ initialTask, onSubmit }) => {
    const [task, setTask] = useState(initialTask);

    useEffect(() => {setTask(initialTask)}, [initialTask]);

    const inputHandler = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    };
    
    const resetForm = () => {setTask(initialTask)};

    const submitHandler = (e) => {
        e.preventDefault();

        if(task.title.trim()) {
            onSubmit(task);
            resetForm();
        }
    };

    return (
        <form className="form">
            <label className='form__label'>
                Enter your task title
                <input 
                    className='form__input' 
                    type="text" 
                    name="title" 
                    id="title"
                    placeholder="Task title"
                    onChange={inputHandler}
                    value={task.title}
                />
            </label>
            <label className='form__label'>
                Enter your task description
                <textarea 
                    className='form__input' 
                    type="text" 
                    name="description" 
                    id="description"
                    placeholder="Task description"
                    onChange={inputHandler}
                    value={task.description}
                    style={{resize: 'none', height: 100}}
                />
            </label>
            <label className='form__label'>
                Set your task priority
                <select 
                    className='form__input' 
                    name="priority" 
                    id="priority"
                    onChange={inputHandler}
                    value={task.priority}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
            {/*
            <button 
                className='button form__reset'
                type="button"
                onClick={resetForm}
            >
                Reset form
            </button>
            */}
            <button 
                onClick={submitHandler} 
                className='button form__submit' 
                type="submit"
            >
                {task.id ? 'Update task' : 'Create task'}
            </button>
        </form>
    );
};

export default TaskForm;