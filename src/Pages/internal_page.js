import React, { useEffect } from 'react';
import styles from "./blog.module.css";
import { useState } from 'react';
import img_logo from './logo-apiki.png';
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";

//Function to page internal
function Internal() {

    const [items, setItems] = useState([]);

    let { slug } = useParams();

    useEffect(() => {

        const getPosts = async () => {
            const res = await fetch(
                `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`);
            const data = await res.json();
            setItems(data);
        }

        getPosts();
    }


    )
    return (
        <div className="main">

            <Link to='/'>
            <center>
            <img src={img_logo} alt=""/>
            </center>
            </Link>
            {items.map((item) => {

                return <div className="card">
                    <div key={item.title.rendered} className="card-body">
                        {
                            item._embedded['wp:featuredmedia'] &&
                            <img src={item._embedded['wp:featuredmedia'][0].source_url} alt="" className={styles.img_post} />
                        }


                        <a href={item.link}><h5 className="card-title">{item.title.rendered}</h5></a>



                        <div className="alert alert-light" role="alert">
                            <div className="card-body" dangerouslySetInnerHTML={{__html: item.content.rendered}}/>

                        </div>

                    </div>
                </div>;

            })}
        </div>
    );
}

export default Internal
