import React from "react";
import Image from "next/image";
import { IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

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
            <IconButton 
                variant='link'
                colorScheme='blue'
                aria-label='Search database' 
                icon={<SearchIcon color="white" />} 
            />
        </S.Container>
    )
}