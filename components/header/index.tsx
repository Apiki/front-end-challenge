import Link from 'next/link'
import { Container, Wrapper } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <a>
            <h1>Apiki Dev</h1>
          </a>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Header
