import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './DefaultLayout'
import { Home } from './pages/home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Post/:slug" element={<Post />} />
      </Route>
    </Routes>
  )
}
