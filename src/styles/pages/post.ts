import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto 2rem auto;
  padding: 0 1rem;

  header {
    margin: 2rem 0;
  }
`

export const PostContent = styled.main`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;

    margin-bottom: 1rem;

    @media (min-width: 650px) {
      height: 400px;
    }
  }

  table {
    margin: 1rem 0;
    width: 100%;
    border-collapse: collapse;
    font-size: 0.8rem;

    tr {
      padding: 0.35rem;
      border: 0.1rem solid ${(props) => props.theme['base-border']};
    }

    th {
      font-size: 0.85rem;
    }

    th,
    td {
      padding: 0.2rem;
    }
  }

  ul {
    padding-left: 2rem;

    li {
      list-style: square;
      margin-top: 0.875rem;

      &:last-child {
        margin-bottom: 0.875rem;
      }
    }
  }

  figure {
    margin: 0;
    img {
      width: 100%;
      height: 200px;
      margin-top: 1rem;
    }
  }

  p {
    margin-top: 1rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 1.2rem;
  }

  h2,
  h3 {
    margin: 1rem 0;
  }

  pre {
    margin: 1rem auto;
    background: ${(props) => props.theme['base-post']};
    padding: 1rem;
    overflow: auto;
    border-radius: 0.3rem;
  }
`
