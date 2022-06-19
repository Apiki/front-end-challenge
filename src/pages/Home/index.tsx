// Dependencies
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";

// Components
import { Navbar } from "../../components/surface/Navbar";
import { ScrollToTopButton } from "../../components/surface/ScrollToTopButton";
import { Card } from "../../components/Card";

// Styles and contents
import { theme } from "../../styles/theme";
import * as STL from "./styles";

// Props and services
import { getPages, getPosts } from "../../services"
interface IApiProps {
    id: number;
    date: string;
    slug: string;
    title: { rendered: string };
    _embedded: {
        author: [{ name: string }];
        "wp:featuredmedia": [{ source_url: string }];
    };
}

// Main
export function Home() {
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [posts, setPosts] = useState<IApiProps[]>([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        getPages().then(setTotalPage)
        getPosts(page).then(res => setPosts(res))
    }, [page])

    const filteredPosts = posts
        .filter(post => post.title.rendered.toLowerCase().includes(search.toLowerCase()))

    return (
        <ThemeProvider theme={theme}>
            <Navbar />


            <STL.PageContainer>
                <STL.PageCounter>{`Página ${page} de ${totalPage}`}</STL.PageCounter>

                <STL.InputSearch
                    type="search"
                    value={search}
                    onChange={ev => setSearch(ev.target.value)}
                    placeholder="Pesquisar...."
                />

                <STL.List>
                    {filteredPosts?.map(data => {
                        const day = data.date.slice(8, 10)
                        const month = data.date.slice(5, 7)
                        const year = data.date.slice(0, 4)

                        return (
                            <li key={data.id}>
                                <Card
                                    date={`${day} / ${month} / ${year}`}
                                    author={data._embedded.author[0].name}
                                    thumbnail={data._embedded["wp:featuredmedia"]
                                        ? data._embedded["wp:featuredmedia"][0].source_url
                                        : ""}
                                    title={data.title.rendered}
                                    page_url={data.slug}
                                />
                            </li>
                        )
                    })}
                </STL.List>

                <STL.ButtonBox>
                    {page > 1 && (
                        <STL.PageButton onClick={() => setPage(page - 1)}>
                            <span>Anterior</span>
                        </STL.PageButton>
                    )}
                    {page < totalPage && (
                        <STL.PageButton onClick={() => setPage(page + 1)}>
                            <span>Carregar mais...</span>
                        </STL.PageButton>
                    )}
                </STL.ButtonBox>
            </STL.PageContainer>


            <ScrollToTopButton />
        </ThemeProvider>
    )
}