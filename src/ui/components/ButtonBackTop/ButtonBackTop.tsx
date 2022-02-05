import { FiArrowUp } from 'react-icons/fi'

import * as S from './ButtonBackTop.styled'

export function ButtonBackTop () {
  function goBackTop () {
    window.scrollTo(0, 0)
  }

  return (
    <S.Content>
      <button title='Go back top' onClick={() => goBackTop()}>
        <FiArrowUp />
      </button>
    </S.Content>
  )
}
