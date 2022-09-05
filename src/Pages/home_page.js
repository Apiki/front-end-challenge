import styles from "./blog.module.css";
import ReactPaginate from 'react-paginate';
import React, { useEffect } from 'react';
import {useState } from 'react';
import img_logo from './logo-apiki.png';
import { Link } from "react-router-dom";

// Main Function to home page
function Home() {

    const [items, setItems] = useState([]);

    const [pageCount, setPageCount] = useState(0);


    useEffect(() => {
            const getPosts = async () => {
                const res = await fetch(
                    'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=1'
                );
                const data = await res.json();
                const total = res.headers.get('X-WP-Total');
                setPageCount(Math.ceil(total/10));
                setItems(data);

            };

            getPosts();
    }
    , []);


    const fetchPost = async (currentPage) => {
        const res = await fetch(
            `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${currentPage}`

        );


        const data = await res.json();
        return data;


    };


    const handlePageClick = async (data) => {

        let currentPage = data.selected + 1;

        const postsFormServer = await fetchPost(currentPage);

        setItems(postsFormServer);
    }

  return (


        <div className="main">
            <Link to='/'>
            <center>
            <img src={img_logo} alt=""/>
            </center>
            </Link>
                    {items.map((item) => {

            return  <div className="card">
                <div key={item.title.rendered} className="card-body">
                        {

                            item._embedded['wp:featuredmedia'] &&
                                    <img src={item._embedded['wp:featuredmedia'][0].source_url} alt="" className={styles.img_post}/>
                        }


                        <h5 className="card-title">{item.title.rendered}</h5>


                        <Link to={`internal_page/${item.slug}`}>  <div className="alert alert-warning" role="alert">
                            <div className="alert-link">{item.slug}</div>
                        </div></Link>

                </div>
        </div>;


        })}

<ReactPaginate
previousLabel={'<<'}
nextLabel={'>>'}
breakLabel={'...'}
pageCount={pageCount}
marginPagesDisplayed={3}
pageRangeDisplayed={3}
onPageChange={handlePageClick}
containerClassName={'pagination justify-content-center'}
pageClassName={'page-item'}
pageLinkClassName={'page-link'}
previousClassName={'page-item'}
previousLinkClassName={'page-link'}
nextClassName={'page-item'}
nextLinkClassName={'page-link'}
breakClassName={'page-item'}
breakLinkClassName={'page-link'}
activeClassName={'active'}
/>

    </div>
);

}

export default Home
