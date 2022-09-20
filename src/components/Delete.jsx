import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import api from '../api'

const handleDetele = async(idPost) => 
      await api
        .delete(`/posts/${idPost}`)
        .then((response) => console.log(response));

return (
  <div>
     <ul>
      {posts &&
        posts.map((post) => (
          <li key={post.id} style={listItem}>
            <Link to={`new/$(post.id})`}>
              <b>{post.title}</b>
            </Link>
            <button onClick={() => handleDelete(+post.id)}>
              <b>Excluir</b>
            </button>
          </li>          
        ))}
     </ul>
  </div>
 
)