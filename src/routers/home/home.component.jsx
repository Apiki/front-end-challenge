import Header from "../../components/header/header.component";
import Posts from "../../components/posts/posts.components";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Posts />
    </div>
  );
};

export default Home;
