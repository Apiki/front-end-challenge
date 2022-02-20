import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import PostsProvider from "./contexts/PostsProvider";


function Routes() {
  


  return (
    <PostsProvider>
      <Router>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/post/:slug'} component={Post} />
        </Switch>
      </Router>
    </PostsProvider>
  );
}

export default Routes;
