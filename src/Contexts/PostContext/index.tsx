import axios from 'axios';
import { createContext, ReactNode, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type PostContextProviderProps = {
    children: ReactNode;
}

type PostContextProps = {
    postContent: PostContentProps,
    getPostContent: (slug: string) => void,
}

type PostContentProps = {
    title: { rendered: string },
    content: { rendered: string },
    excerpt: { rendered: string },
    date: string,
    _embedded: {
        author: Array<{ name: string }>,
        ['wp:featuredmedia']: WpFeaturedMediaProps[],
    }
    yoast_head_json: {
        twitter_misc: { ['Est. tempo de leitura']: string },
        og_image: Array<{ url: string }>
    }
}

type WpFeaturedMediaProps = {
    source_url: string,
    slug: string,
}
const PostContext = createContext({} as PostContextProps);

export function PostContextProvider({ children }: PostContextProviderProps) {

    const [postContent, setPostContent] = useState<PostContentProps>(Object)
    const navigate = useNavigate()

    async function getPostContent(slug: string) {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}&slug=${slug}}`);
        setPostContent(response.data[0])
        navigate(`/${slug}`)
        window.scrollTo(0, 0)
    }

    return (
        <PostContext.Provider value={{ postContent, getPostContent }}>
            {children}
        </PostContext.Provider>
    );
};

export function usePostContext() {
    const value = useContext(PostContext)
    return value;
}