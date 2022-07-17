import React from 'react'
import { Routes, Route } from "react-router-dom";
import TodoList from '../container/todo-list'
import Weather from '../container/weather'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/weather/" element={<Weather />} />
      </Routes>
    </>
  )
}

export default AppRoutes