
import { Route, Routes } from 'react-router-dom'
import { usePostContext } from './Contexts/PostContext'
import './index.css'
import { Home } from './Pages/Home'
import { Post } from './Pages/Post'

export function App() {

  const { postContent } = usePostContext()


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={'/:slug'} element={<Post />} />
      </Routes>
    </div>
  )
}