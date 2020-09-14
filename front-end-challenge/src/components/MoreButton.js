import React from 'react';

function MoreButton({ page }) {
    return(
        <div className="loadMore">
            <a href={`/${parseInt(page) + 1}`}>Carregar mais...</a>
        </div>
    );
}

export default MoreButton;
