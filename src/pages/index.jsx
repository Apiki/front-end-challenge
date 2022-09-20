import Header from '../components/Header/index.jsx';
import Cards from '../components/Cards/index.jsx';
import { useEffect, useState } from "react";
import axios from 'axios'; 
import styles from '../styles/Button.module.css'

export default function Home() {

  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);

  const fetchAllData = async () => {
      setLoading(true);
      const response = await axios.get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`)
      setTimeout(() => {
        setCardData(response.data)
      }, 1000);
      setMaxPage(response.headers['x-wp-totalpages'])
      setLoading(false);
    }

  const loadMore = async () => {
    setPage(page+1);

    if (page == maxPage - 1) {
      return;
    } else {
      setLoading(true);
      const { data } = await axios.get(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`
      );
      setCardData(cardData.concat(data));
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  useEffect(() => {
    fetchAllData();
  }, [])

  return (
    <div>
      <Header />
      {loading && !cardData && 
      <p>Carregando informações</p>
        }
      {cardData && cardData.map((item) => (
      <Cards 
      key={item.id}
      imgUrl={item._embedded['wp:featuredmedia'] &&
            item._embedded['wp:featuredmedia'][0].source_url
            }
      title={item.title.rendered}
      slug={item.slug}
      description={item.yoast_head_json.description}/>
      ))}
      {page == maxPage ? (
              ""
            ) : (
      <div className={styles.button}>
        <button onClick={() => loadMore()}>Carregar Mais...</button>
      </div>
      )}

    </div>
  )
}
