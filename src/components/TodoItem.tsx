import { Todo } from '../types'

interface TodoItemProps {
  todo: Todo
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoItem({ todo, setTodos }: TodoItemProps) {
  const toggleCompleted = () => {
    setTodos(prev =>
      prev.map(t => (t.id === todo.id ? { ...t, completed: !t.completed } : t))
    )
  }

  const deleteTodo = () => {
    setTodos(prev => prev.filter(t => t.id !== todo.id))
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={todo.completed}
          onChange={toggleCompleted}
          id={`todo-${todo.id}`}
        />
        <label
          className={`form-check-label ${todo.completed ? 'text-decoration-line-through' : ''}`}
          htmlFor={`todo-${todo.id}`}
        >
          {todo.text}
        </label>
      </div>
      <button
        className="btn btn-danger btn-sm"
        onClick={deleteTodo}
        aria-label={`Delete todo: ${todo.text}`}
      >
        &times;
      </button>
    </li>
  )
}

export default TodoItem
