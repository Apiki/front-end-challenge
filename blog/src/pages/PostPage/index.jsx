import { useEffect, useState } from 'react';
import Post from '../../components/Post';
import useGlobalContextProvider from '../../hooks/useGlobalContextProvider';
import api from '../../services/api.jsx';
import './styles.css';

function PostPage() {

    const [postData, setPostData] = useState([{
        key: '',
        image: '',
        date: '',
        title: '',
        content: '',
        text: ''
    }]);
    const { slugData } = useGlobalContextProvider();
    
    useEffect(() => {
        async function loadAPI() {
          try {
            const response = await api.get(`/posts?_embed&slug=${slugData}`);
    
            if (response.status > 204) {
              return;
            };
    
            setPostData([{
                image: response.data[0]._embedded['wp:featuredmedia'] && response.data[0]._embedded['wp:featuredmedia'][0].source_url,
                date: response.data[0].date,
                title: response.data[0].title.rendered,
                content: response.data[0].yoast_head_json.description,
                text: response.data[0].content.rendered
            }]);
            
          } catch (error) {
            console.log(error);
          }
        }
        loadAPI();
      }, [slugData]);
    
      console.log(postData);
      
    return(
        <main className='publication-container'>
            <Post postData={postData}/>
        </main>
    )
};

export default PostPage;