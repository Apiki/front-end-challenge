import React, { useContext } from 'react';
import ApikiContext from '../context/apikiContext';
function Home() {
  const { id_postDetails } = useContext(ApikiContext);
  console.log(id_postDetails);
  return (
    <div>
      Detalhes
    </div>
  );
}

export default Home;