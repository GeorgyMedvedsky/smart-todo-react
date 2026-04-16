import { useMemo, useState } from 'react';
import './App.scss'
import Sidebar from './components/Sidebar/Sidebar';
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';
import Modal from './components/Modal/Modal';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const addNewTask = (newTask) => {
    const taskWithId = {
      ...newTask,
      id: crypto.randomUUID(),
      done: false
    }
    setTaskList(prev => [
      ...prev,
      taskWithId
    ])
  };

  const toggleCompletedTask = (id) => {
    setTaskList(prev => prev.map(task => 
      task.id === id ? {...task, done: !task.done} : task
    ));
  };

  const removeTask = (id) => {
    setTaskList(prev => prev.filter(task => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTaskList(prev => prev.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
    setModalOpen(false);
  };

  const editTask = (task) => {
    setEditingTask(task);
    setModalOpen(true);
  };

  const sortedTasks = useMemo(() => (
    [...taskList].sort((a, b) => {
      if(a.done === b.done) return 0;
      return a.done ? 1 : -1;
    })
  ), [taskList]);

  const setFilterTasks = (category) => {

  };

  return (
    <div className='app'>
      <Sidebar>
        <TaskForm initialTask={{ 
            title: '',
            description: '',
            priority: 'low'
          }}
          onSubmit={addNewTask}
        />
      </Sidebar>
      <TaskList 
        taskData={sortedTasks} 
        onDone={toggleCompletedTask} 
        onRemove={removeTask}
        onEdit={editTask}
        onFilter={setFilterTasks}
      />

      {isModalOpen && (
        <Modal onClose={() => {
          setModalOpen(false);
          setEditingTask(null);
        }}>
          <TaskForm initialTask={editingTask} onSubmit={updateTask} />
        </Modal>
      )}

      {/*Панель фильтрации (кнопки: Все, Активные, Выполненные) - табы сверху*/}
      {/*Поле поиска по заголовку - под табами*/}
      {/*Счётчик оставшихся невыполненных задач - сайдбар главный*/}
      {/*Кнопка «Очистить выполненные»*/}
    </div>
  );
}

export default App;