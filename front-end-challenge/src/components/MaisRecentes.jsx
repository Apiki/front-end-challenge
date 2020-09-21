import React, { useContext } from 'react';
import Context from '../Context/Context';
import { goToPost } from '../services/goToPost';

export default function MaisRecentes() {
  const { data } = useContext(Context);

  if (!data.length) return '';

  return (
    <div>
      <h3>Posts mais recentes</h3>
      <ul>
        {data.map((post, i) => {
          if (i < 5) {
            return (
              <li key={i} onClick={() => goToPost(post.slug)}>
                {post.title.rendered}
              </li>
            );
          } return '';
        })}
      </ul>
    </div>
  );
}
