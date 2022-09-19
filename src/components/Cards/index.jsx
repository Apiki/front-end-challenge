import styles from './Cards.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Cards() {

  const URL_API = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  console.log(data)

  const fetchAllData = async () => {
    try{
      setLoading(true);
      const response = await fetch(URL_API);
      const data = await response.json();

      if(!data) throw 'Requisition problem';
      setData(data);
    }
    catch (error){
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllData();
  }, [])
  

  return (
    <div className={styles.wrapper}>
        {loading && !data && 
      <p>Carregando informações</p>
        }
        {data.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.image}>
              <Link href={`/post/${item.slug}`}>
                <Image src={
                  item._embedded['wp:featuredmedia']&&
                  item._embedded['wp:featuredmedia'][0].source_url
                  } 
                  height='300px' width='500px' alt="alt"/>
              </Link>
            </div>
            <div className={styles.text}>
              <Link href={`/post/${item.slug}`}>
              <h3>{item.title.rendered}</h3>
              </Link>
              <p>{item.yoast_head_json.description}</p>
            </div>
          </div>
    ))}
    </div>
  )
}
