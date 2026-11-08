import { configureStore } from "@reduxjs/toolkit";

import ReducerTodo from "../Slices/TodoSlice.jsx";

export const ReduxStore = configureStore({
    reducer:{
        todo: ReducerTodo
    }
})