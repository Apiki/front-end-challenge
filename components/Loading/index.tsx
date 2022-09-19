import React from 'react'

import * as S from './styles'

export default function Loading(props) {
  return (
    <S.Loading 
    data-text="Carregando..." 
    style={{
      "fontSize": props.fontSize, 
      "position": props.position,
      "height": props.height
    }} >
      Carregando...
    </S.Loading>
  )
};