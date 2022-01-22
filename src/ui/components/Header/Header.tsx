import { Link } from 'react-router-dom'
import * as S from './Header.styled'

export function Header () {
  return (
    <>
      <S.ContainerNav>
        <nav>
          <h1>Apiki.</h1>
          <ul>
            <Link to='/'><li>Início</li></Link>
            <Link to='/sobre'><li>Sobre</li></Link>
          </ul>
        </nav>
      </S.ContainerNav>

      <S.ContainerHeader>
        <S.ContentHeader>
          <h1>Blog da Apiki para devs</h1>
          <span>
            Acelere na direção dos seus objetivos. Transforme sua carreira em
            uma jornada de evolução contínua através das melhores tecnologias.
          </span>
        </S.ContentHeader>
      </S.ContainerHeader>
    </>
  )
}
