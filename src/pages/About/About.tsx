import { Header } from 'src/ui'
import * as S from './About.styled'

export function About () {
  return (
    <>
      <Header />
      <S.ContentMain>
        <p>We are the first company in Brazil specialized in WordPress. We develop businesses such as websites, blogs and virtual stores all over the world.
          More than just software developers, we are the ideal strategic partner for those who want to build businesses.
          Apiki is a mix of boldness, innovation, marketing and technology. Born ahead of its time, in 2008, the company
          needed a name that represented its essence. ‘Api’ is the “Brazilian” spelling of the pronunciation of ‘up’ (above),
          short for 'updated'. The letter K was also added to the name, representing marketing, and the letter I, for internet.
          Result: API. Proudly, a specialized company that does absolutely EVERYTHING in WordPress.
        </p>
      </S.ContentMain>
    </>
  )
}
