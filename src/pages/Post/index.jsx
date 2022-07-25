import useFetch  from "../../hooks/useFetch";
import { useParams } from 'react-router-dom';
import parser from "html-react-parser"
import { useEffect } from "react";

import './style.scss';

export default function Post() {
  let { slug } = useParams();
  const api = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`;

  const [data, loading, fetch] = useFetch();
  
  useEffect(() => {
    fetch(api);
  }, []);
  
  return (
    <div className="post">
      <div className="container">
        {loading ? ( <div></div> ) : (
          <div className="topbar col-12 col-lg-9">
              <h1>{data[0].title.rendered}</h1>
              {parser(data[0].excerpt.rendered)}

          </div>
        )}
        <div className="text-content col-12 col-lg-8">
            {loading ? ( <div></div> ) : (
              <>
                {parser(data[0].content.rendered)}
              </>
              )}
        </div>
      </div>
    </div>

  );
}
