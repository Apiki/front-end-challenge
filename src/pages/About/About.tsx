import { Header } from 'src/ui'
import * as S from './About.styled'

export function About () {
  return (
    <>
      <Header />
      <S.ContentMain>
        <p>Somos a primeira empresa do Brasil especializada em WordPress. Desenvolvemos negócios como sites, blogs e lojas virtuais no mundo inteiro.
          Mais do que simples desenvolvedores de software, somos o parceiro estratégico ideal para quem deseja construir negócios.
          A Apiki é uma mistura de ousadia, inovação, marketing e tecnologia. Nascendo à frente do seu tempo, em 2008, a empresa
          precisava de um nome que representasse sua essência. ‘Api’ é a grafia “à brasileira” da pronúncia de ‘up’ (acima),
          abreviação de ‘updated’ (atualizado). Ainda foi adicionado ao nome a letra K, representando marketing, e a I, de internet.
          Resultado: Apiki. Orgulhosamente, uma empresa especializada, e que faz absolutamente TUDO em WordPress.
        </p>
      </S.ContentMain>
    </>
  )
}
