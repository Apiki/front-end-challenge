import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Container } from './styles'

export const RoutesContainer = ({ children }) => {
    return(
        <>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </>
    )
}