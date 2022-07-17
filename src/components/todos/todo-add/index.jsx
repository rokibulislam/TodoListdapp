import React, { useState } from 'react'
import Button from '../../button'
import './styles.scss'

const TodoAdd = ({handleSubmit}) => {
  const [title, setTitle ] = useState ()

  const handleonSubmit = (e) => {
      e.preventDefault();
      handleSubmit(title);
      setTitle('')
  }

  return (
    <form onSubmit={handleonSubmit} className="todoaddform">
        <input name="title" className="form-control" type="text" placeholder="Add Todo" value={title} onChange={ (e) => setTitle(e.target.value) } required />
        <Button type="submit" label="Add New Task"/>
    </form>
  )
}

export default TodoAdd