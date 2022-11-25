import styled from "styled-components";

export const StyledPostsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: 1180px;
  margin: 30px auto;
  padding: 0 20px;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const StyledPostsListItem = styled.li`
  border: 1px solid #efefef;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background: #fbfbfb;
    border: 1px solid #efefef;
  }

  .thumb-post {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 150px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .legend-post {
    padding: 15px;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title-post {
    margin-bottom: 10px;
    font-size: 18px;
  }

  .date-post {
    font-size: 13px;
    font-style: italic;
    color: #c1c1c1;  
  }
  .btn-post {
    text-decoration: none;
    color: #fff;
    border: 1px solid #009BDB;
    border-radius: 4px;
    width: 100%;
    display: block;
    padding: 12px;
    background-color: #009BDB;
    cursor: pointer;
    
    &:hover {
      background: #007db1;
      border: 1px solid #efefef;
    }
  }

`;
