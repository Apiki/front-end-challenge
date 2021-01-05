import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import CardProperties from './CardProperties';
import { contextLease } from '../context/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Main = () => {
  const [propertiesAPI, setPropertiesAPI] = useState([]);
  const { regionSelected, setRegionSelected } = useContext(contextLease);

  useEffect(() => {
    axios.get("https://localhost:5001/v1/property").then(({ data }) => setPropertiesAPI(data));
  }, []);

  const filterByRegion = regionSelected ? propertiesAPI.filter(e => e.region == regionSelected) : propertiesAPI;

  return (
    <div>
      <h2 className="text-primary py-4">Imóveis para Alugar</h2>
      <div className="d-flex justify-content-center flex-wrap">
        {filterByRegion.map((e) => <div key={e.id} >
          <Link to={{ pathname:`property/${e.id}`, state:e.id}}style={{textDecoration: "none", color: 'black'}}>
            <CardProperties
              title={e.title}
              description={e.description}
              picture={e.picture}
              habitation={e.habitation}
              region={e.region}
            />
          </Link>
        </div>
        )}
      </div>
    </div>
  )
};

export default Main;
