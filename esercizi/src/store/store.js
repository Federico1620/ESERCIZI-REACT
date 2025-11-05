import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { todosSlice } from "./todosSlice";
import loggingMiddleware from "./middleware/loggingMiddleware";
import delayMiddleware from "./middleware/delayMiddleware";
import { userSlice } from "./userSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        todos: todosSlice.reducer,
        users: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggingMiddleware, delayMiddleware)
})