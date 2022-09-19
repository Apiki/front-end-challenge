import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { CaretDoubleDown } from 'phosphor-react';

import * as S from "./styles";
import Card from "../components/Card";
import { BASE_URL } from "../utils/constants";
import Loading from '../components/Loading';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [loadingPage, setLoadingPage] = useState(false);

    useEffect(() => {
        const getPosts = async() => {
            await axios(`${BASE_URL}&categories=518&page=${page}`)
                .then(response => response.data)
                .then(data => setPosts([...posts, ...data]))
            setLoadingPage(false)
            setLoading(false)
        }

        setTimeout(() => {
            getPosts()
        }, 3000)
        
    }, [page])

    const handlePage = (e) => {
        e.preventDefault()
        setLoadingPage(true)
        setPage(page + 1)
    }
    
    return (
        <S.Container>
            <Head>
              <title>FRONT END CHALLENGE</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <S.Content>
                {
                loading ? <Loading fontSize="3rem" position="absolute" height="5rem" /> : 
                    posts.map((post) => (
                        <Card key={post.id} post={post} />
                    ))
                }
            </S.Content>
            <S.ContentButton>
                {loadingPage ? <Loading fontSize="1rem" position="static" height="1.8rem" /> : null}
                {posts.length > 0 ? <S.Button onClick={handlePage}>
                    Carregar mais
                    <CaretDoubleDown size={32} />
                </S.Button>
                : null}
            </S.ContentButton>
        </S.Container>
    );
};

export default Posts;
