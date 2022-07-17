import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todo from '../../components/todos/todo'
import TodoAdd from '../../components/todos/todo-add'
import { fetchTodos, addTodo, deleteTodo, completeTodo } from '../../store/slices/todos'
import './styles.scss'

const TodoList = () => {
  const dispatch = useDispatch();
  const todos =  useSelector( state => state.todos.items );

  useEffect( () => {
    dispatch(fetchTodos());
  },[dispatch])

  const handleSubmit = ( title ) => {
    dispatch( addTodo( { title } ) )
  }

  const handleComplete = (e, item) => {
    e.preventDefault()
    dispatch( completeTodo(item) )
  }

  const handleDeleteItem = (e, id) => {
    e.preventDefault()
    dispatch(deleteTodo(id))
  }

  return (
    <div>
      <h1> TodoList </h1>
      <TodoAdd handleSubmit={handleSubmit} />
      { todos.length > 0 ? (
        <ul className="todo-container">
          {
            todos.map( item => <Todo item={item} key={item.id} handleDeleteItem={handleDeleteItem} handleComplete={handleComplete} /> )
          }
        </ul>
      ) :  (
        <div> <p> no todos found </p> </div>
      )}
    </div>
  )
}

export default TodoList