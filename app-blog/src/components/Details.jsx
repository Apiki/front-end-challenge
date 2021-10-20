import React, { useEffect, useState } from 'react';
import { detailsPost } from '../services/apiHome';
import { useHistory } from 'react-router-dom';

function DetailsComp() {
  const [post, setPost] = useState([]);
  const { location } = useHistory();

  const fetchApi = async () => {
    const slug = location.pathname.split('/')[2]
    const data = await detailsPost(slug);
    setPost(data[0]);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const contentText = (post) => {
    document.getElementById('exp').innerHTML = post;
  }

  const removeTags = (post) => {
    // link que me ajudou na resolução => https://www.codegrepper.com/code-examples/javascript/convert+a+string+to+html+element+in+js
    // converte strings com tags html em elementos html
    const parser = new DOMParser();
    const doc = parser.parseFromString(post, 'text/html').querySelector('p').textContent;

    return doc;
  }

  if(post.length < 1) return 'Loading...';

  return (
    <div className='d-flex flex-column mt-3 mb-4'>
      <div className='d-flex align-items-center flex-column'>
        <h2>
          { post.title.rendered }
        </h2>
        <p className='author'>
          { ` Autor: ${ post._embedded.author[0].name }` }
        </p>
        <h6 className='text-center mx-5 pb-4 w-75'>
          { removeTags(post.excerpt.rendered) }
        </h6>
        <img
          alt={ post.slug }
          src={ post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].media_details.sizes['jnews-1140x570'].source_url : post.slug }
          />
        { contentText(post.content.rendered) }
      </div>
    </div>
  );
}

export default DetailsComp;
