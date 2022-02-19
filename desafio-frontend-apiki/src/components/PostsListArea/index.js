import React, { useEffect, useState } from 'react';
import { PostsArea, BtnArea } from './styled';
import useApi from '../../Api/ApikiApi';
import PostLink from '../PostLink';

const ContentArea = () => {

      const api = useApi();

       const [postList, setPostList] = useState([]);
       const [disabled, setDisabled] = useState(false)

       useEffect(() => {
        const getInitialPosts = async () => {
          const json = await api.getInitialPosts();
          setPostList(json);
        }
        getInitialPosts();
       }, [])

      async function getNextPosts() {
          document.getElementById('loadNextPosts').innerHTML = 'Carregando...'
          setDisabled(true);
          const json = await api.getNextPosts();
          let copy = [...postList, ...json];
          setPostList(copy);
          document.getElementById('loadNextPosts').innerHTML = 'Caregar mais...'
          setDisabled(false);
      }
     
        return(
          <>
              {postList.length !== 0 &&
                <>
                  <PostsArea>
                    {postList.map((i, k) => {
                      return (<PostLink json={i} key={k}/>)
                    })}
                  </PostsArea>
                  <BtnArea>
                    <button disabled={disabled} id="loadNextPosts" onClick={getNextPosts}>Carregar mais...</button>
                  </BtnArea>
                </>
              }
          </>
        );
    
    

}

export default ContentArea;