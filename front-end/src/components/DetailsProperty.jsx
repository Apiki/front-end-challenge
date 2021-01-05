import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';


const DetailsProperty = ({ location }) => {

  const [propertyById, setPropertyById] = useState([]);

  useEffect(() => {
    axios.get(`https://localhost:5001/v1/property/${location.state}`)
      .then(({ data }) => setPropertyById([data]))
  }, []);

  console.log(propertyById)

  return (
    <div>
      <NavBar />
      <div className="container">
      <h2 className="text-center">Detalhes do Imóvel</h2>
        {propertyById.map((e) =>
          <div className="my-4 alert-info">
            <h2>More na Região de {e.region}</h2>
            <img className="col py-3 border bg-light" src={e.picture} />
            <h3 className="col py-3 px-md-5 border bg-light">{e.title}</h3>
            <p>{e.habitation}</p>
            <p>{e.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailsProperty;
