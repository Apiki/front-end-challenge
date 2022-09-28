import React from 'react'
import { API_URL } from '../Api'

export const BlogContext = React.createContext()

export const BlogStorage = ({ children }) => {

    //total de páginas
    const [pages, setPages] = React.useState(null)

    // navegação entre paginas
    const [navPage, setNavPage] = React.useState(1)

    // fetch do número de pages 
    React.useEffect(() => {
        async function puxarDados() {
            const dadosResponse = await fetch(`${API_URL}posts?_embed&categories=518`);
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
        <BlogContext.Provider value={{ pages, navPage, setNavPage, carregarMais, carregarAnterior }}>

            {children}
        </BlogContext.Provider>
    )
}