import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Title from "../Title";

describe("Title component", () => {
  it("renders an h1 element with the provided title text", () => {
    render(<Title title="My Page Title" />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: "My Page Title",
    });
    expect(heading).toBeInTheDocument();
  });

  it("applies the default classes", () => {
    render(<Title title="Default Classes" />);
    const heading = screen.getByText("Default Classes");
    expect(heading).toHaveClass(
      "text-base",
      "font-semibold",
      "tracking-wide",
      "font-poppins",
      "color-light",
    );
  });

  it("merges a custom className when provided", () => {
    render(
      <Title title="Custom Class" className="extra-class another-class" />,
    );
    const heading = screen.getByText("Custom Class");
    expect(heading).toHaveClass("extra-class", "another-class");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Title title="Snapshot Title" className="snapshot-class" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
