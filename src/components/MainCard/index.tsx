import { CaretLeft, CaretRight } from 'phosphor-react';

import { ContentMainCard, FooterMainCard, MainCardContainer } from './styles';

export function MainCard() {
  return (
    <MainCardContainer>
      <img
        src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHRtbHxlbnwwfHwwfHw%3D&w=1000&q=80'
        alt=''
      />
      <div>
        <ContentMainCard>
          <h2>Título do card</h2>
          <p>Resumo</p>
        </ContentMainCard>
        <FooterMainCard>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
          <span>1 de 2</span>
        </FooterMainCard>
      </div>
    </MainCardContainer>
  );
}
