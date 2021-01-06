import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';


const DetailsProperty = ({ location }) => {

  const [propertyById, setPropertyById] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const id = location.state;

  useEffect(() => {
    axios.get(`https://localhost:5001/v1/property/${id}`)
      .then(({ data }) => setPropertyById([data]))
  }, []);

  const deleteProperty = async (id) => {
    axios.delete(`https://localhost:5001/v1/property/${id}`)
    .then(res => res)
    .then(err => err);
    setDeleted(true);
    alert("Deletado com sucesso");
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <h2 className="text-center">Detalhes do Imóvel</h2>
        {propertyById.map((e) =>
          <div key={e.id} className="my-4 alert-info">
            <h2>More na Região de {e.region}</h2>
            <img className="col py-3 border bg-light" src={e.picture} />
            <h3 className="col py-3 px-md-5 border bg-light">{e.title}</h3>
            <p>{e.habitation}</p>
            <p>{e.description}</p>
          </div>
        )}
        <Button className="bg-dark" onClick={() => deleteProperty(id)}>Delete</Button>
        {deleted && <Redirect to="/" />}
        <Link className="ml-4" to={{ pathname:`/update/${id}`, state: propertyById}} >Atualizar </Link>
      </div>
    </div>
  );
}

export default DetailsProperty;
