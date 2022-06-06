import {Route, BrowserRouter, Routes}from 'react-router-dom'
import { Navbar } from '../Components/Navbar'
import { Post } from '../Components/Post/[slug]'
import { Home } from '../pages/home'
export function RoutesBlog(){
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Post/:slug' element={<Post />} />
            </Routes>
        </BrowserRouter>
    )
}