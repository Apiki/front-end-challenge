import styled from 'styled-components'

export const Container = styled.div`
	padding: 5.5rem 0 1rem;
	width: 100vw;
	max-width: 1300px;
	margin: 0 auto;
	@media only screen and (min-width: 620px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	@media only screen and (min-width: 920px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

export const ButtonWrapper = styled.div`
	display: flex;
	width: 100%auto;
`

export const SeeMoreButton = styled.button`
	background: #ff6600;
	color: #fff;
	font-weight: 700;
	font-size: 1rem;
	line-height: 1.45rem;
	padding: 1rem;
	border: none;
	border-radius: 8px;
	margin: 1rem auto;
	width: 50%;
	cursor: pointer;
	&:disabled {
		background-color: #995500;
		cursor: not-allowed;
	}
`
