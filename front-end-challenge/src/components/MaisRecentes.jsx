import React, { useContext } from 'react';
import Context from '../Context/Context';
import createBrowserHistory from 'history/createBrowserHistory';

export default function MaisRecentes() {
  const { data } = useContext(Context);

  const goToPost = (slug) => {
    const history = createBrowserHistory({ forceRefresh: true });
    history.push(`/${slug}`);
  };
  
  return (
    <div>
      <h3>Posts mais recentes</h3>
      <ul>
        {data.map((post, i) => {
          if (i < 10) {
            return (
              <div key={i}>
                <li onClick={() => goToPost(post.slug)}>
                  {post.title.rendered}
                </li>
              </div>
            );
          } return '';
        })}
      </ul>
    </div>
  );
}
