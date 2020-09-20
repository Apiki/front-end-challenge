import React, { useEffect, useState } from 'react';
import { apikiInternaAPI } from '../services/apikiAPI';
import InternaCard from '../components/InternaCard';

export default function Interna() {
  const [internaData, setInternaData] = useState([]);

  useEffect(() => {
    apikiInternaAPI(window.location.pathname.substring(1)).then((response) => {
      console.log(response);
      setInternaData(response);
    })
  }, []);
  return (
    <div>
      {internaData.map((post) => <InternaCard key={post.id} post={post} />)}
    </div>
  );
}
