import Image from 'next/image'
import { HeaderContainer } from './style'

import imgLogo from '../../assets/logo.png'
import Link from 'next/link'

export function Header() {
  return (
      <Link href="/">
        <HeaderContainer>
            <Image
              src={imgLogo}
              alt=""
            />
        </HeaderContainer>
      </Link>
  )
}
