import './style.css';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { useState, useEffect } from 'react'

function CurrentPost ({ posts, newPosts }) {
    const { id } = useParams();

    const [currentPost, setCurrentPost] = useState({});

    function handleCurrentPost () {

        const findPost = posts.find((post)=> post.id === parseInt(id, 10))

        const findPost2 = newPosts.find((newPost)=> newPost.id === parseInt(id, 10))

        if(findPost){
            setCurrentPost({...currentPost, ...findPost});
            return;
        }

        setCurrentPost({...currentPost, ...findPost2})
    }

    useEffect(()=> {
        handleCurrentPost()
    },[])

    return (
        <div className='currentPost'>
            <Header/>

        </div>
    )
}

export default CurrentPost;