import React from "react";
import Image from "next/image";
import { MagnifyingGlass, House, Info } from "phosphor-react";

import * as S from './styles'
import Link from "next/link";

export default function Navbar() {
    return(
        <S.Container>
            <Link href="/">
                <a>
                    <Image 
                        src="/images/logo-apiki.webp" 
                        height="40rem" 
                        width="140rem" 
                        alt="Logo APIKI" 
                    />
                </a>
            </Link>
            <S.Menu>
                <MagnifyingGlass size={26} cursor="pointer"/>
                <Link href="/" >
                    <S.Icon><House size={26}/> Home</S.Icon>
                </Link>
                <Link href="/" >
                    <S.Icon><Info size={26} /> Sobre</S.Icon>
                </Link>
            </S.Menu>
        </S.Container>
    )
}