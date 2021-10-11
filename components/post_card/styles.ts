import styled from 'styled-components'

interface ImageProps {
  image: string
}

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 90%;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 1rem auto;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  h3 {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1rem;
  }

  img {
    margin-right: 0.5rem;
  }
`

export const ImageWrapper = styled.div<ImageProps>`
  width: 100%;
  height: 80px;
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px 8px 0 0;
`

export const ContentWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
