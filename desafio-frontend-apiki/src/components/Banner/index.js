import React from 'react';
import {Banner} from './styled';

const BannerArea = () => {
    return(
        <Banner>
            <div className='banner--titleArea'>
                <h1 className="banner--title">Especialista em WordPress</h1>
                <span className='banner--subTitle'>Só fazemos uma coisa em WordPress: Tudo!</span>
            </div>
        </Banner>
    )
}

export default BannerArea;