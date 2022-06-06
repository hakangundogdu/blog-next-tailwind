import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'
import Post from '../components/Post'

const mockData = {
  id: 1,
  userId: 1,
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
}

test('Blog Page', () => {
  render(<Home />)
  expect(screen.getByText('Blog Page')).toBeInTheDocument()
})

test('should render title, and body', () => {
  const { getByText } = render(<Post {...mockData} />)
  const title = getByText(mockData.title)
  const body = getByText(mockData.body)

  expect(title).toBeInTheDocument()
  expect(body).toBeInTheDocument()
})
