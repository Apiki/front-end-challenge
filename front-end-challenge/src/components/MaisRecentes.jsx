import React, { useContext } from 'react';
import Context from '../Context/Context';
import { Link } from 'react-router-dom';

export default function MaisRecentes() {
  const { data } = useContext(Context);
  return (
    <div>
      <h3>Posts mais recentes</h3>
      {data.map((post, i) => <Link key={i} to={`/`}>{post.title.rendered}</Link>)}
    </div>
  );
}
