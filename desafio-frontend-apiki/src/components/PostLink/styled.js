import styled from 'styled-components';

export const PostLink = styled.div`
    width:362px;
    height:300px;
    margin:10px;
    box-shadow:1px 1px 2px #CCC;
    border:1px solid #CCC;
    border-radius:5px;

    .post--img{
        height:180px;

        img{
            border-radius:5px 5px 0 0;
        }
    }

    .post--title{
        height:80px;
        padding:3px;
        border-top:1px solid #CCC;
    }
    .post--link{
        transition:all 0.1s;
        text-decoration:none;
        color:#000;

        div{
            border-top:1px solid #CCC;
            border-radius:0 0 5px 5px;
            padding:5px;
        }

        &:hover{
            color:#555;
        }
    }

    @media (max-width:380px){
        &{
            width:300px;
            height:auto;

            .post--img img{
                width:300px;
            }

            .post--title{
                padding:5px 0;
                height:auto;
            }
        }
    }
`;