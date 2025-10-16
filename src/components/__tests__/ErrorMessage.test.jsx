import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

describe('ErrorMessage', () => {
  it('should render error message', () => {
    render(<ErrorMessage message="Test error message" />)
    
    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument()
    expect(screen.getByText('Test error message')).toBeInTheDocument()
  })

  it('should render retry button when onRetry is provided', () => {
    const handleRetry = vi.fn()
    render(<ErrorMessage message="Test error" onRetry={handleRetry} />)
    
    const retryButton = screen.getByRole('button', { name: /try again/i })
    expect(retryButton).toBeInTheDocument()
  })

  it('should not render retry button when onRetry is not provided', () => {
    render(<ErrorMessage message="Test error" />)
    
    const retryButton = screen.queryByRole('button', { name: /try again/i })
    expect(retryButton).not.toBeInTheDocument()
  })

  it('should call onRetry when retry button is clicked', () => {
    const handleRetry = vi.fn()
    render(<ErrorMessage message="Test error" onRetry={handleRetry} />)
    
    const retryButton = screen.getByRole('button', { name: /try again/i })
    fireEvent.click(retryButton)
    
    expect(handleRetry).toHaveBeenCalledTimes(1)
  })
})

