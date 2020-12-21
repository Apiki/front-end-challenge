import React, { useContext } from 'react';
import ApikiContext from '../context/apikiContext';
import Card from '../components/Card';
import Header from '../components/Header';

function Home() {
  const { posts } = useContext(ApikiContext);
  return (
    <div>
      <Header />
      <div className="list-cards">
        {
          posts.map((post) => <Card key={post.id} post={ post } />)
        }
      </div>
      
    </div>
  );
}

export default Home;
{/* <Card post={ post } /> */}
