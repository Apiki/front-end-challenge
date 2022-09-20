import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import api from '../api'

export default function NewPost() {
  const [title, setTitle] = useState(string);
  const [content, setContent] = useState(string);
  const [Method, setMethod] = useState<'post' | 'put'>('post');
  const { id, postId } = useParams();

  const handleSubmit = async () => {
    e.preventDefault();
    const url = method === 'put' ? `/posts/${postId}` : '/posts';
    await api[method].post(url, { useId: Id, title, body: content }).then((reponse) => {
      console.log(reponse);
    });
  }
    const getPosts = async () => {
      await api.get(`/posts/${postId}`).then((response) => {
        setMethod('put');
        const { title, body } = response.data;
        setTitle(title);
        setContent(body);
      });
    };

    return (
      <div>
        <h2>Novo Post</h2>
        <form>
          <input type="text" placeholder="Título"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <br /><br />
            <textarea placeholder="conteúdo" rows={4} cols={50}
              defaultValue={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <br /><br />
            <button type="submit" onClick={handleSubmit}>
              {''}
              salvar{''}
            </button>          
        </form>
      </div>
    );
}