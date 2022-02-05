import React from 'react';
import { Container, Title, Link, LinkContainer } from './styles';

export function Header() {
    return(
        <Container>
            <Title>Apiki Blog</Title>
            <LinkContainer>
                <Link href="/about">About</Link>
            </LinkContainer>
        </Container>
    )
}