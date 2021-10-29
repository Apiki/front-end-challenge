import './content.css'
import { useState, useEffect } from 'react'
import { Post } from '../Post';

export function Content() {

  const [posts, setPosts] = useState([]);

  async function GetData() {
    useEffect(() => {
      fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [])
  }

  GetData()

  return (
    <div className="container">

      <section>
        <h1>Desenvolvimento WordPress</h1>
        <p>Desenvolva seu negócio, desenvolvendo com WordPress</p>
      </section>

      <main>
        <h3>Últimas postagens</h3>
        <ul>
          {
            posts.map(post => {
              return (
                <Post key={post.id} post={post} />
              )
            })
          }
        </ul>
      </main>
    </div>
  )
}