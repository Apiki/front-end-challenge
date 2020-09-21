import createBrowserHistory from 'history/createBrowserHistory';

export const goToPost = (slug) => {
  const history = createBrowserHistory({ forceRefresh: true });
  history.push(`/${slug}`);
};
