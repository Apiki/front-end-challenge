import React, { useContext, useEffect, useState } from 'react';
import Context from '../Context/Context';
import { goToPost } from '../services/goToPost';

export default function VejaTambem() {
  const { data } = useContext(Context);
  const [postsAleatorios, setAleatorios] = useState([]);

  useEffect(() => {
    const dataPosts = [];
    while (dataPosts.length < 3) {
      let numAleatorio = Math.floor(Math.random() * 10);
      if (dataPosts.indexOf(numAleatorio) === -1) {
        dataPosts.push(numAleatorio);
      }
    }
    setAleatorios(dataPosts);
  }, []);

  if (!data.length) return '';

  return (
    <div>
      <h3>Veja Também</h3>
      <ul>
        {postsAleatorios.map((post, i) => (
          <li key={i} onClick={() => goToPost(data[post].slug)}>
            {data[post].title.rendered}
          </li>
        ))}
      </ul>
    </div>
  );
}
