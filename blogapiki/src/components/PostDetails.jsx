import React, { useContext, useEffect, useState } from 'react';
import { contextBlog } from '../service/context';
import { fetchData } from '../service/requestsApi';
import CardPost from './CardPost';
import { Link } from 'react-router-dom';
import '../style/PostDetails.css'
import parse from 'html-react-parser';

const PostDetails = () => {
  const [dataApi, setDataApi] = useState([]);
  const { slugReq, setSlugReq } = useContext(contextBlog)

  useEffect(() => {
    fetchData(slugReq).then(({ data }) => setDataApi(data))
  }, [slugReq]);

  const internalArticle = () => (
    <div className="internal-content">
      {dataApi.map(({ id, title, _embedded, content }) => {
        const img = _embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url;
        const replaceContent = parse(content.rendered);
        return (
          <div className="detailsPost">
            <CardPost
              key={id}
              title={title.rendered}
              photo={img}
              content={replaceContent}
            />
            <Link to="/" onClick={() => setSlugReq('')}>Voltar</Link>
          </div>
        )
      })}
    </div>
  );

  return (
    <div>
      {internalArticle()}
    </div>
  )
}

export default PostDetails;
