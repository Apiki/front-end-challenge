import {  Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import CurrentPost from './pages/CurrentPost';
import { useState } from 'react';

function MainRoutes () {

    const [posts,setPosts] = useState([]);
    const [newPosts,setNewPosts] = useState([]);

    return (
        <Routes>
            <Route path="/" element={<Main
                newPosts={newPosts}
                setNewPosts={setNewPosts}
                posts={posts}
                setPosts={setPosts}
            />}/>
            <Route path="/post" element={<CurrentPost/>}/>
            <Route path="/post/:id" element={<CurrentPost
                posts={posts}
                newPosts={newPosts}
            />}/>
        </Routes>
    )
}

export default MainRoutes;