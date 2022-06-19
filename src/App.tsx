// Dependencies
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles and contents
import { theme } from "./styles/theme";
import Reset from "./styles/reset"
import { Home } from "./pages/Home";
import { PostPage } from "./pages/Post/[slug]";

// Main
export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Reset />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:slug" element={<PostPage />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}