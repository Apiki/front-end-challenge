import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from '../layout/PageLayout/index'
import Home from '../pages/Home'
import Post from '../pages/Post'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="post/:slug" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
