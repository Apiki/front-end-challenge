/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';
import { fetchPostsDetails } from '../services/FetchPosts';
import { removeTags } from '../helpers';

function BlogPostPage() {
  const { pathname } = useLocation();
  const slug = pathname.slice(1);

  const [dataPostDetails, setDataPostDetails] = useState([]);

  const getPostsDetails = async () => {
    const postsAPI = await fetchPostsDetails(slug);
    setDataPostDetails(postsAPI);
    return postsAPI;
  };

  useEffect(() => {
    getPostsDetails();
  }, []);

  return (
    <>
      <Header />
      <Menu />
      <section className="post-container d-flex">
        <section className="m-xy">
          {dataPostDetails.map((item) => (
            <>
              <img className="img-fluid mb-3" alt="Imagem principal do post" src={item._embedded['wp:featuredmedia'][0].yoast_head_json.og_url} />
              <h1 className="mb-2">{item.title.rendered}</h1>
              <h2 className="mb-2">{removeTags(item.excerpt.rendered)}</h2>
              <div className="d-flex mb-3">
                <img className="avatar" src={item._embedded.author[0].yoast_head_json.og_image[0].url} alt="Foto de Leandro Vieira, CEP da APIKI." />
                <div className="author-details">
                  <p className="author-name">
                    por
                    <span>{item._embedded.author[0].name}</span>
                  </p>
                  <p className="author-description">{item._embedded.author[0].description}</p>
                </div>
              </div>
              <div id="post-content" className="post-content">{removeTags(item.content.rendered)}</div>
            </>
          ))}
        </section>
        <Sidebar />
      </section>
      <Footer />
    </>
  );
}

export default BlogPostPage;
