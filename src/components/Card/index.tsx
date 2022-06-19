// Dependencies
import { ThemeProvider } from "styled-components"
import { Link } from "react-router-dom";

// Styles and contents
import { theme } from "../../styles/theme"
import * as STL from "./styles"
interface ICardProps {
    date: string;
    author: string;
    thumbnail?: string;
    title: string;
    page_url: string;
}

// Main
export function Card(props: ICardProps) {
    return (
        <ThemeProvider theme={theme}>
            <STL.Container>
                <STL.Author>
                    <span>{props.date}</span>

                    <h1>{props.author}</h1>
                </STL.Author>

                <STL.Thumbnail>
                    <img src={props.thumbnail} alt={props.title} />
                    <figcaption>{props.title}</figcaption>
                </STL.Thumbnail>

                <STL.KnowMoreButton>
                    <Link className="page_url" to={`/post/${props.page_url}`}>saiba mais</Link>
                </STL.KnowMoreButton>
            </STL.Container>
        </ThemeProvider>
    )
}