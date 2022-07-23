import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import httpService from '../../services/httpService'

let todoserverurl = process.env.REACT_APP_TODO_API_URL;

export const fetchTodos = createAsyncThunk('todos/fetchtodos', async () => {
    let todos = await httpService.get(`${todoserverurl}/todos/`)
    return todos.data;
})

export const addTodo = createAsyncThunk('todos/addTodo', async ( { title } ) => {
    let todos = await httpService.post(`${todoserverurl}/todos/`,{
        title: title
    })
    return todos.data;
})

export const completeTodo = createAsyncThunk('todos/completeTodo', async (item) => {
    let todo = await httpService.put(`${todoserverurl}/todos/${item.id}`, {
        title: item.title,
        completed: !item.completed
    })
    return todo.data
})

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    let todo = await httpService.delete(`${todoserverurl}/todos/${id}`)
    return todo.data
})


export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        status: 'loading',
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'succeeded';
        },
        [fetchTodos.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [addTodo.pending]: (state, action) => {
            state.status = 'loading';
        },
        [addTodo.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items = [{...action.payload}, ...state.items];
        },
        [addTodo.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [deleteTodo.pending]: (state, action) => {
            state.status = 'loading';
        },
        [deleteTodo.fulfilled]: (state, action) => {
            const todos = state.items.filter( item => item._id !== action.payload._id);
            state.items = todos
            state.status = 'succeeded';
        },
        [deleteTodo.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [completeTodo.pending]: (state, action) => {
            state.status = 'loading';
        },
        [completeTodo.fulfilled]: (state, action) => {
            const todos = state.items.map( item => item._id !== action.payload._id ? item : action.payload );
            state.items = todos
            state.status = 'succeeded';
        },
        [completeTodo.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    }
})

export default todoSlice.reducer;