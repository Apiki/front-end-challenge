import {createContext, useEffect, useState} from 'react'
import {api} from '../../services/api'

export const PagesPostsContext = createContext()

export const PagesPostsProvider = ({children}) => {
    const [totalPages, setTotalPages] = useState()
    const [posts, setPosts] = useState([])    
    const [lastPage, setLastPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        api.get(`/posts?_embed&categories=518&page=1`)
        .then((res) => {
            setTotalPages(res.headers["x-wp-totalpages"])
            setPosts([...res.data])            
        }
        )
        .catch((err) => console.log(err))
    }, [])

    const loadMore = () => {
        if(lastPage < totalPages){
            console.log(lastPage)           
            loadIt(lastPage)
        }
    }

    const loadIt = async (numPage) => {
        setIsLoading(true)
        const page = numPage  + 1 
        await api
        .get(`/posts?_embed&categories=518&page=${page}`)
        .then((res) => {
            setPosts([...posts, ...res.data])
            
        })
        .catch((err) => console.log(err))
        setLastPage(page)
        setIsLoading(false)
    }
    return (
        <PagesPostsContext.Provider 
        value={{
            totalPages,
            posts,
            setPosts,
            loadMore,
            lastPage,
            isLoading
        }}
        > {children}            
        </PagesPostsContext.Provider>
    )
}