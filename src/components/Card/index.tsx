import React, { useEffect } from "react";

import { generateKey } from "~/utils/Key";

import { BlurBar, Container, DateAndAuthor, Thumbnail, Title } from "./style";
import { ICard } from "./type";

const Card = ({
    date,
    embedded: { author: authors, "wp:featuredmedia": featuredMedia },
    embedded,
    excerpt,
    first,
    title,
}: ICard) => {
    useEffect(() => {
        console.log(embedded);
        console.log(excerpt.length);
    }, []);

    return (
        <Container className={first ? "first" : ""}>
            <Thumbnail
                src={featuredMedia[0].source_url}
                height={featuredMedia[0].media_details.sizes.thumbnail.height}
                width={featuredMedia[0].media_details.sizes.thumbnail.width}
            />

            <Title className={first ? "first" : ""}>{title}</Title>

            <DateAndAuthor>
                Postado dia{" "}
                {new Date(date).toLocaleString("pt-BR").split(" ").join(" às ")}{" "}
                {authors && authors[0].name && "por "}
                {authors &&
                    authors.map((author, index) => (
                        <b key={generateKey()}>
                            {authors.length - 1 === index && authors.length > 1
                                ? " e "
                                : ""}
                            {author.name}
                            {index < authors.length && authors.length > 1
                                ? ", "
                                : ""}
                        </b>
                    ))}
            </DateAndAuthor>

            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />

            {!first && excerpt.length > 120 && <BlurBar />}
        </Container>
    );
};

export { Card };
