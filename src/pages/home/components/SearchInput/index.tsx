import { SearchInputContainer } from './styles'

interface SearchInputProps {
  postsLength: number
}

export function SearchInput({ postsLength }: SearchInputProps) {
  return (
    <SearchInputContainer>
      <header>
        <h2>Publicações</h2>
        <span>Total: {postsLength} Publicações</span>
      </header>
    </SearchInputContainer>
  )
}
