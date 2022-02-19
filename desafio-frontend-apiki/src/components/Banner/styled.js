import styled from 'styled-components';

export const Banner = styled.div`
    width:100%;
    height:500px;
    background-image:linear-gradient(to top, #EEE, #45c3ed);
    display:flex;
    justify-content:center;

    .banner--titleArea{
        display:flex;
        flex-direction:column;
        padding-top:120px;
    }

    .banner--title{
        margin:0;
        padding:0;
        font-size:50px;
        font-weight:500;
        color:#f1f1f1;
        text-align:center;
        letter-spacing:1px;
    }

    .banner--subTitle{
        color:#444;
        text-align:center;
        letter-spacing:1px;
    }

    @media (max-width:760px){
        .banner--title{
            font-size:35px;
            margin-bottom:20px;
        }
    }
`;