import React from 'react';
import { Link } from 'react-router-dom';

const AsideDestaks = (articles) => {
  return (
    <aside className="articles-prev-destaks">
      <h1 className="articles-prev-destaks-title">Destaques da semana</h1>
      <hr />
      <ul>
        {articles.map((article, index) => {
          if (index < 10) {
            return (
              <li key={article.id}>
                <Link
                  to={`/${article.slug}`}
                  className="font-ibm-plex"
                >
                  {article.title.rendered}
                </Link>
              </li>
            )
          }
        }

        )}
      </ul>
    </aside>
  );
}

export default AsideDestaks;
