import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

export const PostInternalContext = createContext()


export const PostInternalProvider = ({children}) => {
    const [post, setPost] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [postSlug, setPostSlug] = useState()   
    
    useEffect(() => {
        setIsLoading(true)
        api.get(`/posts?_embed&slug=${postSlug}`)
        .then((res) => {
            setPost(res.data[0])
            localStorage.setItem('post', JSON.stringify(res.data[0]))
        })
        .catch((err) => console.log(err))
        setIsLoading(false)
    }, [])
    
    const fullPost = async (slug) => {
        setIsLoading(true)
        await api.get(`/posts?_embed&slug=${slug}`)
        .then((res) => {
            setPost(res.data[0])
            localStorage.setItem('post', JSON.stringify(res.data[0]))
        })
        .catch((err) => console.log(err))
        setIsLoading(false)        
    }

    return(
        <PostInternalContext.Provider
        value={{
            fullPost,
            post,
            isLoading,
            setPostSlug,
            postSlug
        }}>        
            {children}
        </PostInternalContext.Provider>
    )
}