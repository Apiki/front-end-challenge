import styled from "styled-components";

export const PostWrapper = styled.article`
  max-width: 798px;
  padding: 0 24px;
  margin: 24px auto;
`;

export const Loader = styled.div`
  position: absolute;
  left: calc(50% - 60px);
  top: calc(50%);
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const PostTitle = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.postTitle};

  @media screen and (max-width: 720px) {
    font-size: 32px;
    margin-bottom: 12px;
  }
`;

export const PostDescription = styled.h2`
  font-size: 24px;
  font-weight: 400;
  padding-bottom: 20px;

  color: ${({ theme }) => theme.colors.postDescription};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};

  @media screen and (max-width: 720px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

export const AuthorWrapper = styled.div`
  padding-top: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.postDescription};
    margin-right: 5px;
  }
`;

export const AuthorImg = styled.img`
  width: 35px;
  border-radius: 50%;
  margin-right: 5px;

  @media screen and (max-width: 720px) {
    width: 25px;
  }
`;

export const Author = styled.a`
  font-weight: 700;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.postDescription};
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
    color: ${({ theme }) => theme.colors.postTitle};

    @media screen and (max-width: 720px) {
      font-size: 30px;
    }
  }

  h3 {
    font-size: 28px;
    font-weight: 400;
    margin: 1em 0 0.5em;
    color: ${({ theme }) => theme.colors.postTitle};
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
    color: ${({ theme }) => theme.colors.link};

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
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    border-collapse: collapse;
  }

  tbody tr {
    :nth-child(2n -1) {
      background-color: ${({ theme }) => theme.colors.border};
    }
  }

  th {
    color: ${({ theme }) => theme.colors.darkFocus};
    font-size: 15px;
    padding: 8px 20px;
  }

  td {
    color: ${({ theme }) => theme.colors.lightFocus};
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
      color: ${({ theme }) => theme.colors.lightFocus};
      margin-bottom: 1.25em;
      text-align: left;
    }
    a {
      font-size: 26px;
    }
  }
`;
