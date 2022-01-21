import styled from "styled-components/macro";

export const Container = styled.div`
    height: 40px;
    width: 100%;
    background: #BBB;
    position: fixed;
    top: 0;
		display: flex;

`

export const ContainerInner = styled.div`
	display: flex;
	width: 100%;
	max-width: 900px;
	margin: 0 auto;
	align-items: center;
	a {
		margin-left: 20px;
		font-weight: 600;
	}
`


export const Logo = styled.img`
  height: 30px;
`