import { render, screen, fireEvent } from '@testing-library/react'
import TodoItem from '../components/TodoItem'
import { Todo } from '../types'

const mockTodo: Todo = {
  id: '1',
  text: 'Test todo',
  completed: false,
  createdAt: Date.now()
}

describe('TodoItem', () => {
  it('should toggle completed status when checkbox is clicked', () => {
    const setTodos = vi.fn()
    render(<TodoItem todo={mockTodo} setTodos={setTodos} />)
    
    fireEvent.click(screen.getByRole('checkbox'))
    expect(setTodos).toHaveBeenCalled()
  })

  it('should delete todo when delete button is clicked', () => {
    const setTodos = vi.fn()
    render(<TodoItem todo={mockTodo} setTodos={setTodos} />)
    
    fireEvent.click(screen.getByRole('button', { name: /delete/i }))
    expect(setTodos).toHaveBeenCalled()
  })
})
