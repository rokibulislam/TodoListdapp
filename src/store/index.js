import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todos';

export default configureStore({
  reducer: {
    todos: todoReducer
  },
});