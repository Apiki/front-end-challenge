import { baseURL } from 'src/client/fetcher'
import { render, screen, userEvent, nock, waitFor } from 'src/__helpers__/app-tests'
import { Home } from '.'

describe('Home page', () => {
  it('Checks if the page header loads correctly', async () => {
    const postsMock = nock(baseURL).get('/posts').query({
      _embed: true,
      categories: 518,
      page: 1,
    }).reply(200, [])

    render(<Home />)

    await waitFor(() => expect(postsMock).mockToBeDone())

    expect(screen.getByText(/Apiki blog for devs/)).toBeInTheDocument()
  })

  it('Checks if the load more posts button loads correctly', () => {
    render(<Home />)

    const button = screen.getByText(/Load more posts/)

    expect(button).toBeInTheDocument()

    userEvent.click(button)
  })
})
