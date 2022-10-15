import Image from 'next/image';
import Link from 'next/link';
import logo from '../../images/logo.png';
import { HeaderContainer } from './style';

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} alt='Apiki Logo' />
      <Link href='/'>Home</Link>
    </HeaderContainer>
  )
}