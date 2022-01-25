import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalStyle } from './ui'
import { HOME } from './routes'
import { Home } from './pages'

function App () {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
