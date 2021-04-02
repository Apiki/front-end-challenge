import parse from 'html-react-parser'
import { useContext } from 'react';
import ApikiBlogContext from '../context/ApikiBlogContext';
import options from '../styles/options';
const PostDetails= () => {
  const { data } = useContext(ApikiBlogContext);
  console.log(data);
  const { _embedded, title, content } = data[0];
  const source = _embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
  return (
    <div>
      <img src={ source } alt='' className='details-main-img'/>
      <h3 className='title'>{title.rendered}</h3>
      <div>{
      parse(
        content.rendered, options
        )
        }</div>
        <footer className='details-footer'>APIKI BLOG</footer>
    </div>
  );
};

export default PostDetails;
