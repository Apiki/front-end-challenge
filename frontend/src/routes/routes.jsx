import Article from '../pages/Article';
import Home from '../pages/Home';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/article/:slug',
    element: <Article />,
  },
];

export default routes;
