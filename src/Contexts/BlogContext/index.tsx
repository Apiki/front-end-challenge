import axios, { AxiosResponseHeaders } from "axios";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

type BlogContextProps = {
    blogData: BlogDataProps,
    setBlogData: Dispatch<SetStateAction<BlogDataProps>>,
    blogHeaders: BlogHeaderProps,
    fetch__data: (pageNumber: number) => Promise<void>,
    pageNumber: number,
    setPageNumber: Dispatch<SetStateAction<number>>
    isLoading: boolean,
}

type BlogContextProviderProps = {
    children: ReactNode
}

type BlogDataProps = [{
    guid: { rendered: string },
    title: { rendered: string },
    date: string,
    excerpt: { rendered: string },
    yoast_head_json: any

}] | undefined;

type BlogHeaderProps = {
    totalPagesPosts: number,
    totalPages: number
} | AxiosResponseHeaders | undefined;

const BlogContext = createContext({} as BlogContextProps)

export function BlogContextProvider({ children }: BlogContextProviderProps) {
    const [blogData, setBlogData] = useState<BlogDataProps>()
    const [blogHeaders, setBlogHeaders] = useState<BlogHeaderProps>()
    const [pageNumber, setPageNumber] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    async function fetch__data(pageNumber: number) {
        setIsLoading(true)
        const response = await axios.get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${pageNumber}`)
        setBlogData(response.data)
        setBlogHeaders(response.headers)
        setIsLoading(false)
    }

    useEffect(() => {
        fetch__data(pageNumber)
    }, [pageNumber])

    return (
        <BlogContext.Provider value={{ fetch__data, blogData, blogHeaders, setBlogData, pageNumber, setPageNumber, isLoading }}>
            {children}
        </BlogContext.Provider>
    )
}

export function useBlogData() {
    const value = useContext(BlogContext)
    return value
}