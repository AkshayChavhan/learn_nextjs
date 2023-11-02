import { configureStore } from "@reduxjs/toolkit";
import firstSliceUserReducer from "./slice";
import secondSliceTodoReducers from "./secondTodoSlice";

export const store = configureStore({
    reducer : {
        userData : firstSliceUserReducer,
        todoData : secondSliceTodoReducers
    }
})