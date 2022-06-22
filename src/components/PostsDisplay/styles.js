import styled from "styled-components";

export const PostsDisplayWrapper = styled.section`
  max-width: 1170px;
  min-height: calc(100vh - 150px);
  margin: 0 auto;
  padding: 24px;

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
`;

export const PostCard = styled.article`
  width: 100%;
  max-width: 350px;
`;

export const CardImg = styled.img`
  width: 100%;
  max-height: 183.75px;
  border-radius: 8px;
  margin-bottom: 15px;

  cursor: pointer;
`;

export const CardTitle = styled.h2`
  font-size: 16px;
  line-height: 1.2em;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.postTitle};

  cursor: pointer;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.2em;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.postContent};
`;

export const Button = styled.button`
  font-size: 16px;
  line-height: 1.2em;
  font-weight: 700;
  letter-spacing: 0.05rem;
  text-transform: uppercase;

  width: 200px;
  height: 40px;
  margin-bottom: 20px;
  border: none;
  border-radius: 8px;

  position: relative;
  left: calc(50% - 100px);

  background-color: ${({ theme }) => theme.colors.link};
  color: ${({ theme }) => theme.colors.buttonText};

  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.buttonTextHover};
    filter: opacity(90%);
  }
`;
