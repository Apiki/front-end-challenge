
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './Pages/Home'
import { Post } from './Pages/Post'

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post' element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}