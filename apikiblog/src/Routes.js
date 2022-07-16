import {  Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Post from './pages/CurrentPost';

function MainRoutes () {

    

    return (
        <Routes>
            <Route path="/" element={<Main
            />}/>
            <Route path="/post" element={<Post/>}/>
            <Route path="/post/:slug" element={<Post/>}/>
        </Routes>
    )
}

export default MainRoutes;