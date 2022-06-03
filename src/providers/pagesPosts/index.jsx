import {createContext, useEffect, useState} from 'react'
import {api} from '../../services/api'

export const PagesPostsContext = createContext()

export const PagesPostsProvider = ({children}) => {
    const [totalPages, setTotalPages] = useState()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        api.get()
        .then((res) => {
            setTotalPages(res.headers["x-wp-totalpages"])
            setPosts([res.data])
        }
        )
        .catch((err) => console.log(err))

        console.log(totalPages)
    }, [])

    //const loadMore =

    return (
        <PagesPostsContext.Provider 
        value={{
            totalPages,
            posts,
            setPosts
        }}
        > {children}            
        </PagesPostsContext.Provider>
    )
}