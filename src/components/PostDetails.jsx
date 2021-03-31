import parse from 'html-react-parser'
import { useContext } from 'react';
import ApikiBlogContext from '../context/ApikiBlogContext';

const PostDetails= () => {
  const { data } = useContext(ApikiBlogContext);
  console.log(data);
  const { _embedded, title, content } = data[0];
  const source = _embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
  return (
    <div>
      <img src={ source } alt=""/>
      <h3>{title.rendered}</h3>
      <div>{parse(content.rendered)}</div>
    </div>
  );
};

export default PostDetails;
