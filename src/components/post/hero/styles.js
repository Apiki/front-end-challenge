import styled from 'styled-components'

export const Container = styled.div`
	width: 100vw;
	height: 450px;
	background-image: ${(props) => `url(${props.image})`};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: initial;
`
