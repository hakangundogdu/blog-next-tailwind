import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'

test('should render the post "sunt aut facere repellat"', () => {
  render(<Home />)
  expect(screen.getByText('Blog Page')).toBeInTheDocument()
})
