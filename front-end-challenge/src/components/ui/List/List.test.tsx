import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Button from "../Button";

describe("Button component – testes adicionais", () => {
  it("fica desabilitado quando `disabled` é true e não dispara onClick", () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Não posso
      </Button>,
    );
    const btn = screen.getByRole("button", { name: /não posso/i });
    expect(btn).toBeDisabled();
    fireEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("usa `type='button'` por padrão e permite sobrescrever para `submit`", () => {
    render(<Button>Default</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");

    render(<Button type="submit">Enviar</Button>);
    expect(screen.getByRole("button", { name: /enviar/i })).toHaveAttribute(
      "type",
      "submit",
    );
  });

  it("propaga atributos HTML arbitrários (`aria-label`, `data-*`, etc.)", () => {
    render(
      <Button aria-label="Fechar diálogo" data-testid="btn-123">
        X
      </Button>,
    );
    const btn = screen.getByTestId("btn-123");
    expect(btn).toHaveAttribute("aria-label", "Fechar diálogo");
    expect(btn).toHaveTextContent("X");
  });

  it("combina com o snapshot", () => {
    const { asFragment } = render(
      <Button variant="tertiary" size="sm">
        Snap
      </Button>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
