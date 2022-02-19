import styled from 'styled-components';

export const PostsArea = styled.main`
    width:100%;
    margin:0;
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
`;

export const BtnArea = styled.div`
    height:70px;
    display:felx;
    justify-content:center;
    align-items:center;

    #loadNextPosts{
        font-weight:bold;
        width:400px;
        height:40px;
        border:0;
        border-radius:5px;
        box=shadow:1px 1px 2px #CCC;
        background-color:rgba(0, 0, 0, 1);
        color:#FFF;

        &:hover{
            background-color:rgba(0, 0, 0, 0.8);
        }
    }

    @media (max-width:420px){
        #loadNextPosts{
            width:80%;
        }
    }
`;