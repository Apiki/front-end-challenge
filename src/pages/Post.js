import PostItemUnico from '../components/posts/PostItemUnico';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostPage() {

    const params = useParams();  
    const url = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=' + params.slug;
    
    const [isLoading, setIsLoading] = useState( true );
    const [loadedPosts, setLoadedPosts] = useState([]);

    useEffect(() => {  
      setIsLoading( true );
      fetch( url )
        .then(( response ) => {
          return response.json()
        })
        .then(( data ) => {          
            const transfPost = data.map( postData => {
            let imageChecked = "";    
            try { imageChecked = postData._embedded["wp:featuredmedia"][0].source_url; } catch { imageChecked = "no image"; }; 
            return {
              id: postData.id,
              title: postData.title,
              image: imageChecked,
              content: postData.content
            }
          })
          setLoadedPosts( transfPost );
          setIsLoading( false );
        });
    }, []);

    if( isLoading ) {
      return (
        <section>   
          <h1>Pagina Interna</h1>       
          <p>Loading ...</p>
        </section>
      );      
    }
    
    return (
      <section>
        <h1>Pagina Interna</h1>       
        <PostItemUnico post={ loadedPosts[0] } />        
      </section>      
    );
  }
  
  export default PostPage;
  