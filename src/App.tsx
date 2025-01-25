import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import TodoList from './components/TodoList'
import Navbar from './components/Navbar'
import About from './pages/About'
import NotFound from './pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="app-container">
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<TodoList todos={todos} setTodos={setTodos} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
