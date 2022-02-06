import React from 'react';

import { Container, Button } from './styles';

export function Paginacao({ category, onClick }) {
    return (
        <Container>
            <Button onClick={onClick}>{category}</Button>
        </Container>
    );
}