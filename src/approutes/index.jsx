import React from 'react'
import { Routes, Route } from "react-router-dom";
import TodoList from '../container/todo-list'
import Weather from '../container/weather'
import PostList from '../container/post-list'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/weather/" element={<Weather />} />
        <Route path="/posts/" element={<PostList />} />
      </Routes>
    </>
  )
}

export default AppRoutes