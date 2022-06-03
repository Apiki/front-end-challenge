import { createContext, useEffect, useState } from "react";
import { postApi } from "../../services/api";

export const PostInternalContext = createContext()

export const PostInternalProvider = ({children}) => {
    const [post, setPost] = useState()

    const fullPost = async (slug) => {
            await postApi
            .get(slug)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
    

    return(
        <PostInternalContext.Provider
        value={{
            post
        }}>        
            {children}
        </PostInternalContext.Provider>
    )
}