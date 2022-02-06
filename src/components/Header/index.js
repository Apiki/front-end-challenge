import React from 'react';
import { Container, Title, Link, LinkContainer } from './styles';

export function Header({ category, text }) {
    return(
        <Container>
            <Title>Apiki Blog</Title>
            <LinkContainer>
                <Link href={`${category}`}>{text}</Link>
            </LinkContainer>
        </Container>
    )
}