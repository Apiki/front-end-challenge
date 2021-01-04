import React, { useEffect, useState } from 'react';
import CardProperties from './CardProperties';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  const [propertiesAPI, setPropertiesAPI] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:5001/v1/property").then(({ data }) => setPropertiesAPI(data));
  }, [])

  return (
    <div >
      <h2 className="h2">Lancamento</h2>
      <div className="d-flex justify-content-center flex-wrap">
        {propertiesAPI.map((e) => <div>
          <CardProperties
            key={e.Id}
            title={e.Title}
            description={e.Description}
            picture={e.Picture}
            habitation={e.Habitation}
            region={e.Region}
          />
        </div>
        )}
      </div>
      <h2 >Novidades</h2>
      <div className="d-flex justify-content-center flex-wrap">
        {/* {[1, 2, 3, 4, 6, 2].map((e) => <div> <CardProperties /> </div>)} */}
      </div>
    </div>
  )
};

export default Main;
