import styled from "styled-components";

export const Footer = styled.footer`
    width:100%;
    padding:30px 0;
    background-color:#444;
    display:flex;
    justify-content:center;
    margin-top:40px;

    .social{

        border-right:1px solid #F1F1F1;
        padding-right:25px;
        display:flex;
        flex-direction:column;
        align-items:center;

        .social--links{
            margin-top:10px;
        }

        ul{
            display:flex;
            justify-content:center;
            gap: 10px;
            text-align:center;
        }

        ul, li{
            list-style:none;
            margin:0;
            padding:0
        }

        .social--link{
            text-decoration:none;
            color:#F1F1F1;
            font-size:25px;
        }
    }

    .branches{
        padding-left:25px;
        display:flex;
        gap:50px;
        align-items:center;

        .branches--city{
            font-weight:500;
            color:#FFF;
        }

        .branches--address{
            color:#999;
        }
    }

    @media (max-width:940px){
        .branches{
            flex-direction:column;
            gap:20px;
        }
    }

    @media (max-width:580px){
        &{
            flex-direction:column;

            .social{
                border-right:none;
                padding:20px;
            }
        }
    }
`;