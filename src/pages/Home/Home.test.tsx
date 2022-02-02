import '@testing-library/jest-dom'

import { render, screen, userEvent } from 'src/__helpers__/app-tests'
import { Home } from '.'

describe('Home page', () => {
  it('Checks if the page header loads correctly', () => {
    render(<Home />)

    expect(screen.getByText(/Apiki blog for devs/)).toBeInTheDocument()
  })

  it('Checks if the load more posts button loads correctly', () => {
    render(<Home />)

    const button = screen.getByText(/Load more posts/)

    expect(button).toBeInTheDocument()

    userEvent.click(button)
  })
})
