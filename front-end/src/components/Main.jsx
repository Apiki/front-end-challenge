import React from 'react';
import CardProperties from './CardProperties';
import 'bootstrap/dist/css/bootstrap.min.css';




const Main = () => {
  return (
    <div >
      <h2 className="h2">Lancamento</h2>
      <div className="d-flex justify-content-center flex-wrap">
        {[1,2,3,4,6, 2].map((e) => <div> <CardProperties /> </div> )}
      </div>
      <h2 >Novidades</h2>
      <div className="d-flex justify-content-center flex-wrap">
        {[1,2,3,4,6,2].map((e) => <div> <CardProperties /> </div> )}
      </div>
    </div>
  )
};

export default Main;
