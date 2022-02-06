import React from "react";
import { Image, ContentCard, CardContainer, Link } from './styles';

export function PostCard({ title, imagem, slug }) {
    return (
        <CardContainer>
            <Image src={imagem} alt={imagem}/>
            <ContentCard>
                <p>{title}</p>
                <Link href={`/postpage/${slug}`}>Ver mais</Link>
            </ContentCard>
        </CardContainer>
    )
}
