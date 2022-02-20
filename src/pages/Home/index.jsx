import HomeCards from "../../components/Cards/HomeCards";
import Header from "../../components/Header";
import AdCards from "../../components/Cards/AdCards";
import "./style.css";

function Home() {
  return (
    <>
      <Header></Header>
      <div className="main-container">
        <div className="container-left">
          <HomeCards></HomeCards>
        </div>
        <div className="container-right">
          <AdCards></AdCards>
        </div>
      </div>
    </>
  );
}

export default Home;
