import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        add: (state, action) => {state.push(action.payload)},
        remove: (state, action) => { return state.filter((t)=> t.id !== action.payload.id)},
        edit: (state, action) => {
            const todo = state.find((t)=> t.id === action.payload.id)
            if(todo){
                todo.title = action.payload.title
                todo.completed = action.payload.completed
            }
        }
    }
})

export const {add, remove, edit} = todosSlice.actions
export default todosSlice.reducer
