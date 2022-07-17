import React from 'react'
import Button from '../../button'
import './styles.scss'

const Todo = ({ item, key, handleComplete, handleDeleteItem }) => {
  return (
    <li className="todo-item" key={key}> 
        <span className="todo-title"> {item.title}  </span>
        <input type="checkbox" onChange={ (e) => handleComplete(e, item)} checked={item.completed} />
        <Button onClick={ (e) => handleDeleteItem(e, item.id)} label="Delete" variant="danger">  </Button>
    </li>
  )
}

export default Todo