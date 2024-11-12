import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from '../redux/todosSlice'

const App = () => {
  const [newTask, setNewTask] = useState('')
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()
  
  return (
    <></>
  );
};

export default App;
