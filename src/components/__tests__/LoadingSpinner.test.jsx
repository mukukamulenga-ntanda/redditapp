import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

describe('LoadingSpinner', () => {
  it('should render loading text', () => {
    render(<LoadingSpinner />)
    
    expect(screen.getByText('Loading awesome content...')).toBeInTheDocument()
  })

  it('should render spinner element', () => {
    const { container } = render(<LoadingSpinner />)
    
    const spinner = container.querySelector('.loading-spinner')
    expect(spinner).toBeInTheDocument()
  })
})

