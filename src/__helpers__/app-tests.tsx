import { ReactElement, ReactNode } from 'react'
import { render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import nock from 'nock'

type Options = {
  initialRoute?: string
  routePath?: string
  queryClient?: QueryClient
}

type Props = {
  children?: ReactNode
}

function render (
  ui: ReactElement,
  {
    initialRoute = '/',
    routePath = '/',
    queryClient = new QueryClient(),
  }: Options = {},
) {
  function Wrapper ({ children }: Props) {
    return (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[initialRoute]}>
          <Routes>
            <Route path={routePath} element={children} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    )
  }

  return {
    ...rtlRender(ui, {
      wrapper: Wrapper,
    }),
  }
}

export * from '@testing-library/react'
export { render, userEvent, nock }
