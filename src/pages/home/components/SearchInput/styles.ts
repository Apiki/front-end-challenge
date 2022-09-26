import styled from "styled-components";

export const SearchInputContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.65rem;
    h3 {
      color:  ${(props) => props.theme['gray-900']};
    }
    span {
      color:  ${(props) => props.theme['gray-900']};
    }
  }
  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background:  ${(props) => props.theme['gray-500']};
    border:  ${(props) => props.theme['gray-900']};
    color:  ${(props) => props.theme['gray-100']};
    transition: 0.4s;
    &:focus {
      border-color:  ${(props) => props.theme['gray-900']};
      outline: none;
    }
    &::placeholder {
      color:  ${(props) => props.theme['gray-100']};
    }
  }
`;