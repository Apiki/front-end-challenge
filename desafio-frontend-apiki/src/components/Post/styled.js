import styled from 'styled-components';

//Infelizmente não compreendi muito bem como deveria ser feita a estilização das postagens

export const Container = styled.div`
    width:100%;
    margin:100px auto;

    img{
        width:100%;
    }

    .imgPost{
        width:100%;

        img{
            width:100%;
        }
    }
    .titlePost{
        margin:0;
        padding:30px 0;
        text-align:center;
    }
`;