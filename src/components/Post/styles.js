import styled from "styled-components";

export const PostWrapper = styled.main`
  max-width: 798px;
  padding: 0 24px;
  margin: 24px auto;
`;

export const PostTitle = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 0.4em;

  color: ${({ theme }) => theme.colors.postTitle};
`;

export const PostDescription = styled.h2`
  font-size: 24px;
  font-weight: 400;
  padding-bottom: 0.834em;

  color: ${({ theme }) => theme.colors.postDescription};
  border-bottom: 2px solid #f0f0f0;
`;

export const AuthorWrapper = styled.div`
  padding-top: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    font-size: 13px;
    color: #a0a0a0;
    margin-right: 5px;
  }
`;

export const AuthorImg = styled.img`
  width: 35px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const Author = styled.a`
  font-weight: 700;
  font-size: 13px;
  color: #a0a0a0;
  text-decoration: none;
`;

export const PostImg = styled.img`
  width: 100%;
  margin: 20px 0;
  border-radius: 10px;
`;

export const PostContent = styled.div`
  max-width: 660px;
  margin: 20px auto;
  overflow: hidden;

  h2 {
    font-size: 35px;
    font-weight: 400;
    margin: 0.83em 0 0.5022em;
    color: ${({ theme }) => theme.colors.postContent};
  }

  h3 {
    font-size: 28px;
    font-weight: 400;
    margin: 1em 0 0.5em;
  }

  p {
    font-size: 18px;
    line-height: 1.3em;
    margin-bottom: 1.25em;
    text-align: justify;
    color: ${({ theme }) => theme.colors.postContent};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.buttonBackground};

    :hover {
      color: ${({ theme }) => theme.colors.postContent};
    }
  }

  img {
    width: 100%;
    height: auto;
    margin-bottom: 22.5px;
  }

  table {
    padding-bottom: 18px;
    margin-bottom: 18px;
    border-bottom: 1px solid #f0f0f0;
    border-collapse: collapse;
  }

  tbody tr {
    :nth-child(2n -1) {
      background-color: #f0f0f0;
    }
  }

  th {
    color: #5a5a5a;
    font-size: 15px;
    padding: 8px 20px;
  }

  td {
    color: #7b7b7b;
    font-size: 15px;
    padding: 8px 20px;
  }

  ul {
    padding-left: 6%;
    margin-bottom: 27px;
  }

  li {
    font-size: 18px;
    line-height: 1.25em;
    margin-bottom: 0.5em;
  }

  blockquote {
    padding-left: 6%;
    margin-bottom: 32px;

    p {
      font-size: 26px;
      line-height: 1.25em;
      color: #7b7b7b;
      margin-bottom: 1.25em;
      text-align: left;
    }
    a {
      font-size: 26px;
    }
  }
`;
