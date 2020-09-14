import React from 'react';

function MoreButton({page}) {
    return(
        <div className="moreButton">
            <a href={`/${parseInt(page) + 1}`} className="btn btn-primary btn-lg">Carregar mais.</a>
        </div>
    );
}

export default MoreButton;
