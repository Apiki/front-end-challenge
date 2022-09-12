import { ButtonContainer } from './style'

interface ButtonPaginateProps {
  onClickNext: () => void
  onClickPrev: () => void
  page: number
  pageCount: number
}

export function ButtonPaginate({
  onClickNext,
  onClickPrev,
  page,
  pageCount,
}: ButtonPaginateProps) {
  const validatedDisabledNext = page >= pageCount
  const validatedDisabledPrev = page === 1

  return (
    <ButtonContainer>
      <button onClick={onClickPrev} disabled={validatedDisabledPrev}>
        Anterior
      </button>
      <button onClick={onClickNext} disabled={validatedDisabledNext}>
        Próxima
      </button>
    </ButtonContainer>
  )
}
