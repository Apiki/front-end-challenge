import styled from "styled-components/macro";

export const Container = styled.article`
	display: flex;
	max-width: 900px;
	width: 90%;
	margin: 50px auto;
	flex-direction: column;
	justify-content: center;
`

export const ContainerImage = styled.div`
  width: 100%;
`

export const Image = styled.img`
	width: 100%;
	max-height: 400px;
	object-fit: fill;

`
export const Title = styled.h1`
  font-size: 2.5rem;
	text-align: center;
	margin: 30px 0;
`

export const Content = styled.p`
	text-align: justify;
	width: 100%;
	margin: 0 auto;
	table, td, tr{
		border: 1px solid black;
		text-align: center;
	}
	h2 {
		margin: 10px 0;
		text-align: center;
	}
	p {
		margin: 10px 0;
	}

	img, video {
		margin: 10px;
		max-width: 100%;
		object-fit: contain;
	}
`

export const ContainerAuthor = styled.div`
	display: flex;
	width: 100%;
	max-width: 900px;
	margin: 20px auto;
`

export const ContainerImageAuthor = styled.div`
	width: 96px;
	height: 96px;
	margin: 10px;
`
export const ContainerInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
`

export const ImageAuthor = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: fill;
`

export const Name = styled.h2`
	font-size: 1.2rem;
`

export const Description = styled.p`
	align-text: justify;
`
