import React from 'react'
import { API_URL } from '../Api'

export const BlogContext = React.createContext()

export const BlogStorage = ({ children }) => {
    // fetch dados pagina inicial
    const [dadospage, setdaDospage] = React.useState(null)
    //toral de paginas
    const [pages, setPages] = React.useState(null)
    // navegação entre paginas
    const [navPage, setNavPage] = React.useState(1)

    //Fetch inicial funcionando
    React.useEffect(() => {
        fetch(`${API_URL}posts?_embed&categories=518&page=${navPage}`)
            .then((response) =>
                response.json())
            .then((json) => setdaDospage(json))
    }, [navPage])

    // teste de paginação 
    React.useEffect(() => {
        async function puxarDados() {
            const dadosResponse = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518`);
            setPages(dadosResponse.headers.get('X-WP-TotalPages'));
        }
        puxarDados();
    }, [])

    //função para adicionar + 1 no navPage
    function carregarMais() {
        setNavPage((navPage) => navPage + 1
        )
    }

    function carregarAnterior() {
        setNavPage((navPage) => navPage - 1)
    }

    return (
        <BlogContext.Provider value={{ dadospage, pages, setNavPage, navPage, carregarMais, carregarAnterior }}>

            {children}
        </BlogContext.Provider>
    )
}