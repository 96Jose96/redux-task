import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from '../redux/todosSlice'

const App = () => {
  const [newTask, setNewTask] = useState('')
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask))
      setNewTask('')
    }
  }

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id))
  }
  
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Añadir una nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTask(todo.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
