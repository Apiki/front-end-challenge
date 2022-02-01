import { Link } from 'react-router-dom'
import * as S from './Header.styled'

export function Header () {
  return (
    <>
      <S.ContainerNav>
        <nav>
          <h1>Apiki.</h1>
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
          </ul>
        </nav>
      </S.ContainerNav>

      <S.ContainerHeader>
        <S.ContentHeader>
          <h1>Apiki blog for devs</h1>
          <span>
            Accelerate towards your goals. Transform your career into a journey
            of continuous evolution through the best technologies.
          </span>
        </S.ContentHeader>
      </S.ContainerHeader>
    </>
  )
}
