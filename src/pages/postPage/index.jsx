import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Button, ProgressCircular } from "ui-neumorphism"
import { PostInternalContext } from "../../providers/postInternal"
import { ContainerPage } from "./styles"

const PostPage = () => {
    const {post, isLoading} = useContext(PostInternalContext)
    const navigate = useNavigate()
    console.log(post)
    
    return (
        <ContainerPage>
        {isLoading?
        
        <ProgressCircular 
        className={"element__loading"} 
        indeterminate 
        size={36} 
        width={4} 
        color='var(--primary)' 
        />
        
        :
        (<div className="div__post">
            <img className="img__post"
                src={post._embedded["wp:featuredmedia"][0].source_url} 
                alt={post._embedded["wp:featuredmedia"][0].alt_text} 
            />
            <h2>{post.title.rendered}</h2>              
            <div className="div__author">
                <img 
                    src={post._embedded.author[0].avatar_urls['96']} 
                    alt={`Avatar de: ${post._embedded.author[0].name}`} 
                />
                <span>Por: <a href={post._embedded.author[0].link}>{post._embedded.author[0].name}</a></span>                          
            </div>
            
            <div
            dangerouslySetInnerHTML={{__html: post.content.rendered}} 
            className="div__content"
            />

        </div>)
        }
            <Button onClick={() => navigate('/')}>Voltar à página inicial</Button>
        </ContainerPage>
    )
}

export default PostPage