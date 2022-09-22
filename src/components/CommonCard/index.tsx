import { CommonCardContainer, ContentCommonCard } from './styles';

export function CommonCard() {
  return (
    <CommonCardContainer>
      <img
        src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHRtbHxlbnwwfHwwfHw%3D&w=1000&q=80'
        alt=''
      />
      <hr />
      <ContentCommonCard>
        <h3>Título do card</h3>
        <p>Resumo</p>
      </ContentCommonCard>
    </CommonCardContainer>
  );
}
