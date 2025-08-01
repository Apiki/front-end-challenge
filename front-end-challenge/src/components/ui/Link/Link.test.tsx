import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { Link } from ".";

describe("Link component", () => {
  it("renderiza o texto passado como children e usa role=‘link’", () => {
    render(<Link href="/home">Home</Link>);
    const link = screen.getByRole("link", { name: /home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent("Home");
  });

  it("aplica as classes padrão `text-white underline underline-offset-3`", () => {
    render(<Link href="/about">Sobre</Link>);
    const link = screen.getByRole("link", { name: /sobre/i });
    expect(link).toHaveClass("text-white", "underline", "underline-offset-3");
  });

  it("mescla uma `className` extra sem remover as classes padrão", () => {
    render(
      <Link href="/extra" className="minha-classe destaque">
        Extra
      </Link>,
    );
    const link = screen.getByRole("link", { name: /extra/i });
    expect(link).toHaveClass("text-white", "underline", "underline-offset-3");
    expect(link).toHaveClass("minha-classe", "destaque");
  });

  it("atribui corretamente o atributo `href`", () => {
    render(<Link href="https://exemplo.com">Visitar</Link>);
    const link = screen.getByRole("link", { name: /visitar/i });
    expect(link).toHaveAttribute("href", "https://exemplo.com");
  });

  it("propaga props arbitrários (`target`, `rel`, `aria-label`, `data-*`)", () => {
    render(
      <Link
        href="#!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fechar"
        data-testid="link-test"
      >
        X
      </Link>,
    );
    const link = screen.getByTestId("link-test");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveAttribute("aria-label", "Fechar");
  });

  it("dispara onClick quando clicado", () => {
    const handleClick = jest.fn();
    render(
      <Link href="#!" onClick={handleClick}>
        Clique
      </Link>,
    );
    fireEvent.click(screen.getByRole("link", { name: /clique/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("preserva elementos complexos passados como children", () => {
    render(
      <Link href="/composto">
        <strong>Importante</strong> Texto
      </Link>,
    );
    const strong = screen.getByText("Importante");
    expect(strong.tagName).toBe("STRONG");
    expect(screen.getByRole("link")).toHaveTextContent("Importante Texto");
  });

  it("combina com o snapshot", () => {
    const { asFragment } = render(
      <Link href="/snap" className="abc">
        <em>S</em>nap
      </Link>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
