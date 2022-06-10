import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoadingPage } from './components/Loadings/LoadingPage'
import { APIContextProvider } from './contexts/apiContext'
const Home = React.lazy(() => import('./pages/Home'))
import PostContent from './pages/PostContent'

export function App() {

  return (
    <APIContextProvider>
      <Routes>
        <Route path='/' element={

          <Suspense fallback={<LoadingPage />}>
            <Home />
          </Suspense>

        } />
        <Route path={'/:slug/'} element={
          <PostContent />
        }
        />



      </Routes>
    </APIContextProvider>
  )

}

