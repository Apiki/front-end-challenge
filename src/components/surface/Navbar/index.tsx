// Dependencies
import { ThemeProvider } from "styled-components"

// Styles and contents
import { theme } from "../../../styles/theme"
import * as STL from "./styles"
import logo_IMG from "../../../assets/logo.png"

// Main
export function Navbar() {
    return (
        <ThemeProvider theme={theme}>
            <STL.Container>
                <img src={logo_IMG} alt="Apiki logo" />
            </STL.Container>
        </ThemeProvider>
    )
}