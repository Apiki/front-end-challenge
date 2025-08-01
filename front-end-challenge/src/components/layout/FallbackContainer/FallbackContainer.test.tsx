import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import FallbackContainer from ".";

describe("FallbackContainer component", () => {
  it("renders a div with default classes and children", () => {
    render(
      <FallbackContainer>
        <span>Content</span>
      </FallbackContainer>,
    );
    const container = screen.getByText("Content").parentElement;
    expect(container).toBeInTheDocument();
    expect(container?.tagName).toBe("DIV");
    [
      "h-[518px]",
      "lg:h-[70vh]",
      "overflow-hidden",
      "rounded-2xl",
      "border",
      "border-slate-700/60",
      "flex",
      "items-center",
      "justify-center",
    ].forEach((cls) => {
      expect(container).toHaveClass(cls);
    });
  });

  it("merges a custom className prop", () => {
    render(
      <FallbackContainer className="extra-class another-class">
        <p>Test</p>
      </FallbackContainer>,
    );
    const container = screen.getByText("Test").parentElement;
    expect(container).toHaveClass("extra-class");
    expect(container).toHaveClass("another-class");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <FallbackContainer className="snap-class">
        <div>Snap</div>
      </FallbackContainer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
