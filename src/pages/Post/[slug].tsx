// Dependencies
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import Helmet from "react-helmet"

// Components
import { Navbar } from "../../components/surface/Navbar";
import { ScrollToTopButton } from "../../components/surface/ScrollToTopButton";
import { SEO } from "../../infra/SEO"

// Styles and contents
import { theme } from "../../styles/theme";
import * as STL from "./styles";

// Props and services
import { getSelectedPost } from "../../services"
interface IPostProps {
    id: number;
    title: { rendered: string };
    _embedded: { "wp:featuredmedia": [{ source_url: string }]; };
    content: { rendered: string };
    yoast_head_json: {
        title: string;
        description: string;
    };
}

// Main
export function PostPage() {
    const [post, setPost] = useState<IPostProps[]>([]);

    useEffect(() => {
        const get_url = window.location.href
        const url = get_url.slice(27)

        getSelectedPost(url).then(setPost)
    }, [])


    return (
        <ThemeProvider theme={theme}>
            {post.map(data => {
                return (
                    <SEO title={data.yoast_head_json.title} description={data.yoast_head_json.description} />
                )
            })}

            <Navbar />

            <STL.PageContainer>
                {post.map(data => {
                    return (
                        <div key={data.title.rendered}>
                            <STL.MainInfo>
                                <img src={data._embedded["wp:featuredmedia"][0].source_url} alt={data.title.rendered} />
                                <figcaption>{data.title.rendered}</figcaption>
                            </STL.MainInfo>

                            <STL.Content
                                dangerouslySetInnerHTML={{ __html: data.content.rendered }}
                            />
                        </div>
                    )
                })}
            </STL.PageContainer>

            <ScrollToTopButton />
        </ThemeProvider>
    )
}