import { createContext, useEffect, useState } from "react";
import { postApi } from "../../services/api";

export const PostInternalContext = createContext()
const storage = localStorage.getItem("ClickedPost")

export const PostInternalProvider = ({children}) => {
    const [post, setPost] = useState('')
    const [postSlug, setPostSlug] = useState(JSON.parse(storage))

    const fullPost = async (postSlug) => {
        console.log(postSlug)
            await postApi
            .get(postSlug)
            .then((res) => setPost(res.data))
            .catch((err) => console.log(err))
        }
    

    return(
        <PostInternalContext.Provider
        value={{
            fullPost,
            post,
            postSlug,
            setPostSlug
        }}>        
            {children}
        </PostInternalContext.Provider>
    )
}