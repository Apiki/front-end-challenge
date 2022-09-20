import Image from 'next/image';
import logo from '../../assets/images/apiki-logo.png';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {


  return(
    <div className={styles.headerWrapper}>
      <Link href={'/'}>
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  )
}