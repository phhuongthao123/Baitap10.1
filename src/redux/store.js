// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // Đường dẫn này phải chính xác

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
