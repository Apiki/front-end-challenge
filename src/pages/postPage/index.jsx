import React, { useContext } from "react"
import { PostInternalContext } from "../../providers/postInternal"

const PostPage = () => {
    const {post, fullPost} = useContext(PostInternalContext)
    return (
    <> 
        {post?
            <h1>{post.title.rendered}</h1>
            :
            <p>Carregando... </p>
        }
        
    </>
    
    )
}

export default PostPage