// Styles and content
import * as STL from "./styles"
import { CaretDoubleUp } from "phosphor-react"

// Main
export function ScrollToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <STL.Container type="button" onClick={scrollToTop}>
            <CaretDoubleUp className="icon" />
        </STL.Container>
    )
}