import styled from 'styled-components'

export const Container = styled.div`
	width: 100vw;
	height: 450px;
	background-image: ${(props) => `url(${props.image})`};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	margin-top: 55px;

	@media only screen and (min-width: 620px) {
		margin-top: 65px;	
	}
	
	@media only screen and (min-width: 920px) {
		margin-top: 85px;
		background-position: initial;
	}
`
