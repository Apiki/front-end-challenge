import React from "react";
import Header from "../../components/Header/Header";
import ButtonNewPage from "../../components/Buttons/ButtonNewPage";
import NewsCards from "../../components/HomePage/NewsCards";
import Footer from '../../components/Footer/Footer';

const HomePage = () => (
  <div>
    <Header />
    <NewsCards />
    <ButtonNewPage />
    <Footer />
  </div>
);

export default HomePage;
