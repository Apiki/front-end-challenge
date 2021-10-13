import { Container, Wrapper, Link } from './styles'

const Header = () => {
	return (
		<Container>
			<Wrapper>
				<Link href="/">
					<img src="/logo_apiki.webp" alt="Apiki Dev" />
				</Link>
			</Wrapper>
		</Container>
	)
}

export default Header
