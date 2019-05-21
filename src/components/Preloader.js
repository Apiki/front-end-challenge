import React from 'react'
import preloader from '../preloader.gif'

const Preloader = () => {
    return(
        <div id="preloader">
            <img src={preloader} alt="Carregando..."></img>
        </div>
    );
}

export default Preloader;