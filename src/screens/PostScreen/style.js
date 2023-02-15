import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const PostContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .home-button {
    color: ${colors.secondary[100]};
    font-size: 1.4rem;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    &:hover {
      color: ${colors.secondary[200]};
    }
    ${device.laptop} {
      font-size: 1.6rem;
    }
  }
`;

export const CoverImage = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  .post {
    padding: 1.6rem;
    padding-bottom: 2.4rem;
    border-bottom: 1px solid ${colors.primary[400]}; 

  h2 {
    margin-top: 2.8rem;
    font-size: 1.8rem;
  }

  h3 {
    margin-top: 2.8rem;
    font-size: 1.6rem;
  }

  p {
    width: 100%;
    font-size: 1.4rem;
    margin-top: 1.2rem;
  }

  table {
    margin: 2rem 0;
    background-color: ${colors.primary[100]};
    th {
      padding:  .8rem;
      font-size: 1.2rem;
      text-align: center;
      background-color: ${colors.primary[300]};
    }
    
    tr {
      background-color: ${colors.primary[300]};
      font-size: 1.2rem;
      
      td {
        padding:  .8rem;
      }
    }
  }

  blockquote {
    padding: 2rem ;
    margin: 2rem 0;
    font-weight: 600;
    text-align: center;
    background-color: ${colors.primary[300]};

    a {
      width: fit-content;
      margin: 1.2rem auto;
      display: block;
      padding:  .4rem .8rem;
      background-color: ${colors.secondary[100]};

      color: ${colors.primary[200]};
      font-size: 1.4rem;
      text-decoration: none;
    }
  }

  a {
      font-size: 1.4rem;
    }

  img {
    width: 100%;
    height: auto;
    margin: 1.6rem 0;
  }

  ul, ol {
    margin: 1.4rem 0;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    li {
      margin: 0 2.4rem ;
      font-size: 1.4rem;
    }
  }

  pre {
    padding: 1.4rem;
    margin: 1.8rem 0;

    color: ${colors.primary[200]};
    font-size: 1.4rem;
    background-color: ${colors.primary[800]};
  }

  ${device.tablet} {
    padding-bottom: 4.8rem;

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.8rem;
    }

    p, 
    a, 
    pre, 
    ol li,
    ul li, 
    blockquote a,
    table th,
    table tr {
      font-size: 1.6rem;
    }
  }

  ${device.laptop} {
    h2 {
      font-size: 2.8rem;
    }

    h3 {
      font-size: 2rem;
    }

    p {
      margin-top: 1.8rem;
    }

    p, 
    a, 
    pre, 
    ol li,
    ul li, 
    blockquote a,
    table th,
    table tr {
      font-size: 1.8rem;
    }
  }
  }
`;