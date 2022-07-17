import React from 'react'
import { Routes, Route } from "react-router-dom";
import TodoList from '../container/todo-list'

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<TodoList />} />
        </Routes>
    </>
  )
}

export default AppRoutes