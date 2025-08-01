import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Radio from "../Radio";

describe("Radio component", () => {
  const baseProps = {
    id: "radio-1",
    name: "group",
    value: "val1",
    label: "Opção 1",
    onChange: () => {},
  };

  it("renderiza o input radio com os atributos corretos e a classe sr-only", () => {
    render(<Radio {...baseProps} />);
    const input = screen.getByRole("radio", { name: /opção 1/i });
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "radio");
    expect(input).toHaveAttribute("id", baseProps.id);
    expect(input).toHaveAttribute("name", baseProps.name);
    expect(input).toHaveAttribute("value", baseProps.value);
    expect(input).toHaveClass("sr-only");
  });

  it("renderiza o label apontando para o input e exibindo o texto", () => {
    render(<Radio {...baseProps} />);
    const label = screen.getByText(baseProps.label);
    expect(label).toBeInTheDocument();
    expect(label.closest("label")).toHaveAttribute("for", baseProps.id);
  });

  it("envolve tudo em um container com as classes flex e gap e aceita className extra", () => {
    render(<Radio {...baseProps} className="minha-classe" />);
    const input = screen.getByRole("radio", { name: /opção 1/i });
    const container = input.closest("div");
    expect(container).toHaveClass("flex", "items-center", "gap-4");
    expect(container).toHaveClass("minha-classe");
  });

  it("mostra o indicador interno com opacity-0 quando unchecked e opacity-100 quando checked", () => {
    const { rerender } = render(<Radio {...baseProps} checked={false} />);

    const input = screen.getByRole("radio", { name: /opção 1/i });
    const container = input.closest("div")!;
    const innerDot = container.querySelector("span > span")!;
    expect(innerDot).toHaveClass("opacity-0");

    rerender(<Radio {...baseProps} checked />);
    const innerDotChecked = screen
      .getByRole("radio", { name: /opção 1/i })
      .closest("div")!
      .querySelector("span > span")!;
    expect(innerDotChecked).toHaveClass("opacity-100");
  });

  it("propaga props arbitrários como data-* e aria-*", () => {
    render(
      <Radio
        {...baseProps}
        data-testid="radio-test"
        aria-label="Escolha uma opção"
      />,
    );
    const input = screen.getByTestId("radio-test");
    expect(input).toHaveAttribute("aria-label", "Escolha uma opção");
  });

  it("dispara onChange quando clicado", () => {
    const handleChange = jest.fn();
    render(<Radio {...baseProps} onChange={handleChange} />);
    const input = screen.getByRole("radio", { name: /opção 1/i });
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("combina com o snapshot", () => {
    const { asFragment } = render(
      <Radio
        {...baseProps}
        checked
        className="snapshot-class"
        onChange={() => {}}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
