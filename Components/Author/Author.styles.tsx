import styled from "styled-components";
import NextImage from 'next/image'

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;  
`
export const Image = styled(({ size, ...props}) => <div><NextImage {...props} layout="fixed" priority="1" height={size} width={size} /></div>)`
  border-radius: 50%;
  max-height: ${({ size }) => size}px;
`

export const Name = styled.h2`
  font-size: 20px;
  position: relative;
  top: -4px;
`

