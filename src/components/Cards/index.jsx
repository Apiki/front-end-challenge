import styles from './Cards.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Cards({ imgUrl, title, slug, description}) {

  return (
    <div className={styles.wrapper}>
           
          <div className={styles.card}>
            <div className={styles.image}>
              <Link href={`/post/${slug}`}>
                <Image src={imgUrl} 
                  height='300px' width='500px' alt="alt"/>
              </Link>
            </div>
            <div className={styles.text}>
              <Link href={`/post/${slug}`}>
              <h3>{title}</h3>
              </Link>
              <p>{description}</p>
            </div>
          </div>
    
    </div>
  )
}
