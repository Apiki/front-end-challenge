import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './ui'
import { HOME } from './routes'
import { Home } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
