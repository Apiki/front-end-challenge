import axios, { AxiosResponseHeaders } from "axios";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

type BlogContextProps = {
    blogData: BlogDataProps[],
    setBlogData: Dispatch<SetStateAction<BlogDataProps[]>>,
    blogHeaders: BlogHeaderProps,
    fetch__data: (pageNumber: number) => Promise<void>,
    pageNumber: number,
    setPageNumber: Dispatch<SetStateAction<number>>
    isFetching: boolean,
}

type BlogContextProviderProps = {
    children: ReactNode
}

type BlogDataProps = {
    title: { rendered: string },
    date: string,
    excerpt: { rendered: string },
    _embedded: {
        author: Array<{ name: string }>,
        ['wp:featuredmedia']: WpFeaturedMediaProps[],
    }
    yoast_head_json: {
        twitter_misc: { ['Est. tempo de leitura']: string },
        og_image: Array<{ url: string }>
    }
};

type WpFeaturedMediaProps = {
    source_url: string,
    slug: string,
}

type BlogHeaderProps = {
    ['x-wp-total']: number,
    ['x-wp-totalpages']: number
} | AxiosResponseHeaders;

const BlogContext = createContext({} as BlogContextProps)

export function BlogContextProvider({ children }: BlogContextProviderProps) {
    const [blogData, setBlogData] = useState<BlogDataProps[]>([])
    const [blogHeaders, setBlogHeaders] = useState<BlogHeaderProps>({})
    const [pageNumber, setPageNumber] = useState(1)
    const [isFetching, setIsFetching] = useState(false)

    async function fetch__data(pageNumber: number) {
        setIsFetching(true)
        const response = await axios.get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${pageNumber}`)
        console.log(blogData.length);
        blogData.length === 0 ? setBlogData(response.data) : setBlogData((prevValue) => [...prevValue, ...response.data])
        setBlogHeaders(response.headers)
        setIsFetching(false)
    }

    useEffect(() => {
        fetch__data(pageNumber)
    }, [pageNumber])

    return (
        <BlogContext.Provider value={{ fetch__data, blogData, blogHeaders, setBlogData, pageNumber, setPageNumber, isFetching }}>
            {children}
        </BlogContext.Provider>
    )
}

export function useBlogData() {
    const value = useContext(BlogContext)
    return value
}