import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Spinner from "../Spinner";

describe("Spinner component", () => {
  it("renders a span element with default spinner classes", () => {
    const { container } = render(<Spinner />);
    const span = container.querySelector("span");
    expect(span).toBeInTheDocument();
    expect(span).toHaveClass(
      "animate-spin",
      "rounded-full",
      "h-8",
      "w-8",
      "border-4",
      "border-gray-200",
      "border-t-blue-500",
    );
  });

  it("renders an empty span without children", () => {
    const { container } = render(<Spinner />);
    const span = container.querySelector("span");
    expect(span).toBeEmptyDOMElement();
  });

  it("merges a custom className prop", () => {
    const { container } = render(
      <Spinner className="extra-class another-class" />,
    );
    const span = container.querySelector("span");
    expect(span).toHaveClass("extra-class", "another-class");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Spinner className="snapshot-class" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
