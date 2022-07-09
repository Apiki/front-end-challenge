import { Route, Switch, Redirect } from 'react-router-dom';

import AllPostsPage from './pages/AllPosts';
import PostPage from './pages/Post';
import Layout from './components/layout/Layout';

function App() {

  return (
    <div> 
      <Layout>
        <Switch>          
          <Route exact path='/'><Redirect to='/postlist/page1' /></Route>
          <Route exact path='/postlist/:page'><AllPostsPage /></Route>       
          <Route exact path='/post/:slug'><PostPage /></Route>       
        </Switch>
      </Layout>
    </div>
  );
}

export default App;



