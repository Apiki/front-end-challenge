import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import Home from './pages/Home';

describe('Verifica se a página inicial renderiza corretamente.', () => {
  it('verifica se o título/logo da página renderiza corretamente', () => {
    render(<Home />);

    expect(screen.getByText(/Apiki Blog/)).toBeInTheDocument();
  });

  it('verifica se botão "mostrar mais" renderiza corretamente', () => {
    render(<Home />);

    expect(screen.getByTestId('topo-btn')).toBeInTheDocument();
  });

  it('verifica se botão "voltar ao topo" renderiza corretamente', () => {
    render(<Home />);

    expect(screen.getByRole('button', { name: /Carregar mais.../ })).toBeInTheDocument();
  });

})

describe('Verifica se as noticias são carregadas corretamente', () => {
  it('Carrega os cards de notícia', async () => {
    render(<App />);

    expect(await screen.findAllByTestId('card')).toBeInTheDocument()
  });

  it('Renderiza a primeira notícia', async () => {
    render(<App />);

    expect(await screen.findByText(/Como criar Web Stories no WordPress/)).toBeInTheDocument()
  });

  it('Renderiza o botão para acessar o conteudo da noticia', async () => {
    render(<App />);

    expect(await screen.findByText(/Link para postagem/)).toBeInTheDocument()
  });

})

describe('Verifica se as funcionalidades do site funcionam corretamente', () => {
  it('Verifica se botão "carregar mais" funciona corretamente', async () => {
    render(<App />);

    const carregarMaisBtn = screen.getByText(/Carregar mais.../);
    userEvent.click(carregarMaisBtn);

    expect(await screen.findAllByTestId('card')).toHaveLenght(20)
  });

  it('Verifica se botão "link para postagem" funciona corretamente', async () => {
    render(<App />);

    const LinkBtn = screen.getAllByText(/Link para postagem/)[0];
    userEvent.click(LinkBtn);

    expect(await screen.findAllByText(/Como criar Web Stories no WordPress/)).toBeInTheDocument()
  });

})
