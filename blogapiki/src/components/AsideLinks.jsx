import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../style/AsideLinks.css'
import { contextBlog } from '../service/context';

const AsideLinks = () => {
  const { setSlugReq, dataApi } = useContext(contextBlog);

  return (
    <>
      <h1 className="publish">Em Alta</h1>
      <div className="links-aside">
        {dataApi.map(links => (
          <div className="publish-aside">
            <Link onClick={() => setSlugReq(links.slug)}>
              {links.slug}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default AsideLinks;
