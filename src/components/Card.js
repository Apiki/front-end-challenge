import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ items }) => {
    return (
        items.map(item => (
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 card-box" key={item.id}>
                <Link to={`/post/${item.slug}`} title={item.title.rendered}>
                    <div className="img-post">
                        <img src={item._embedded['wp:featuredmedia'][0].media_details.sizes['card-size'].source_url || item._embedded['wp:featuredmedia'][0].source_url} alt={item.title.rendered}></img>
                    </div>
                <span className="title-post">{item.title.rendered}</span>
                </Link>
            </div >
        ))
    );
}

export default Card