// !import configure sotre which helps to create store
import { configureStore } from '@reduxjs/toolkit';
// !ab jo reducer banaye ho todoSlice me onko import kro yha par 
import todoReducer from '../features/todo/todoSlice';

// !export the store
export const store = configureStore({
    reducer: todoReducer
});