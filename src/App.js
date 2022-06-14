import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import SinglePost from "./Pages/SinglePost";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<main className="appBody">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="home" element={<Home />} />
						<Route path="post/:slug" element={<SinglePost />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
