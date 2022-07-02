import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import PostPage from "./pages/PostPage";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/:slug" element={ <PostPage />} />
        </Routes>
    )
}