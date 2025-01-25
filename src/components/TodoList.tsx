import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import FilterButtons from './FilterButtons'
import { Todo, FilterType } from '../types'

interface TodoListProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoList({ todos, setTodos }: TodoListProps) {
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="todo-container">
      <h1 className="text-center mb-4">Todo List</h1>
      <TodoForm setTodos={setTodos} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <ul className="list-group mt-3">
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
