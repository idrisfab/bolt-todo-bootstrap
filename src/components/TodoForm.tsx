import { useState } from 'react'
import { Todo } from '../types'

interface TodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoForm({ setTodos }: TodoFormProps) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) {
      setError('Todo text cannot be empty')
      return
    }
    setError('')
    setTodos(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: text.trim(),
        completed: false,
        createdAt: Date.now()
      }
    ])
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className={`form-control ${error ? 'is-invalid' : ''}`}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a new todo..."
          aria-label="Add a new todo"
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </form>
  )
}

export default TodoForm
