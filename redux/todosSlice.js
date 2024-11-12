import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload
            })
        },
        deleteTask: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        }
    }
})

export const { addTask, deleteTask } = todosSlice.actions
export default todosSlice.reducer