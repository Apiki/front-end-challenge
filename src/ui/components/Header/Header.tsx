import { Link } from 'react-router-dom'
import * as S from './Header.styled'

export function Header () {
  return (
    <S.Container>
      <nav>
        <ul>
          <Link to='/'><li>Início</li></Link>
          <Link to='/sobre'><li>Sobre</li></Link>
        </ul>
      </nav>
    </S.Container>
  )
}
