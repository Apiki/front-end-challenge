import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalStyle } from './ui'
import { HOME, ABOUT } from './routes'
import { Home, About } from './pages'

function App () {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={ABOUT} element={<About />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
