import { render, screen, fireEvent } from '@testing-library/react'
import TodoForm from '../components/TodoForm'

describe('TodoForm', () => {
  it('should show error when submitting empty form', () => {
    const setTodos = vi.fn()
    render(<TodoForm setTodos={setTodos} />)
    
    fireEvent.submit(screen.getByRole('form'))
    expect(screen.getByText('Todo text cannot be empty')).toBeInTheDocument()
    expect(setTodos).not.toHaveBeenCalled()
  })

  it('should add todo when form is submitted with valid text', () => {
    const setTodos = vi.fn()
    render(<TodoForm setTodos={setTodos} />)
    
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New todo' } })
    fireEvent.submit(screen.getByRole('form'))
    
    expect(setTodos).toHaveBeenCalled()
    expect(screen.getByRole('textbox')).toHaveValue('')
  })
})
