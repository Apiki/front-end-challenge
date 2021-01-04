import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';


const DetailsProperty = ({ location }) => {

  const [propertyById, setPropertyById] = useState([]);

  useEffect(() => {
    axios.get(`https://localhost:5000/v1/property/${location.state}`)
      .then(({ data }) => setPropertyById(data))
  }, []);

  console.log(propertyById)

  return (
    <div>
      <NavBar />
      <h2>Detalhes do Imóvel</h2>
      {propertyById.map((e) => {
        <div>
          <h3>{e.title}</h3>
          <img src={e.picture} />
          <p>{e.description}</p>
        </div>
      })}
    </div>
  );
}

export default DetailsProperty;
