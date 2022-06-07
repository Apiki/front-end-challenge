import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PostInternalContext } from "../../providers/postInternal"

const PostPage = () => {
    const {post, isLoading} = useContext(PostInternalContext)
    const navigate = useNavigate()
    console.log(post)
    
    return (
        <>
        {isLoading?
        <p>Loading...</p>
        :
        (<div>
            <img 
                src={post._embedded["wp:featuredmedia"][0].source_url} 
                alt={post._embedded["wp:featuredmedia"][0].alt_text} 
            />
            <h2>{post.title.rendered}</h2>              
            <div>
                <img 
                    src={post._embedded.author[0].avatar_urls['96']} 
                    alt={`Avatar de: ${post._embedded.author[0].name}`} 
                />
                <span>Por: <a href={post._embedded.author[0].link}>{post._embedded.author[0].name}</a></span>                          
            </div>
            
            <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />

        </div>)
        }
            <button onClick={() => navigate('/')}>Voltar à página inicial</button>
        </>
    )
}

export default PostPage