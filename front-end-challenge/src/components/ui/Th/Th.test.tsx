import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Th from "../Th";

describe("Th component", () => {
  it("renders a th element with default classes and children", () => {
    render(
      <table>
        <thead>
          <tr>
            <Th>Header</Th>
          </tr>
        </thead>
      </table>,
    );
    const headerCell = screen.getByText("Header");
    expect(headerCell.tagName).toBe("TH");
    expect(headerCell).toHaveClass(
      "sticky",
      "top-0",
      "z-10",
      "bg-dark",
      "px-4",
      "h-[55px]",
      "text-center",
      "font-semibold",
      "font-poppins",
      "text-sm",
      "text-white",
      "tracking-wide",
    );
  });

  it("merges a custom className when provided", () => {
    render(
      <table>
        <thead>
          <tr>
            <Th className="extra-th custom">Col</Th>
          </tr>
        </thead>
      </table>,
    );
    const th = screen.getByText("Col");
    expect(th).toHaveClass("extra-th", "custom");
  });

  it("passes arbitrary HTML props to the th element", () => {
    render(
      <table>
        <thead>
          <tr>
            <Th data-testid="th-test" aria-label="Head" title="title-text">
              X
            </Th>
          </tr>
        </thead>
      </table>,
    );
    const th = screen.getByTestId("th-test");
    expect(th).toHaveAttribute("aria-label", "Head");
    expect(th).toHaveAttribute("title", "title-text");
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(
      <table>
        <thead>
          <tr>
            <Th className="snap-class" data-extra="y">
              Snap
            </Th>
          </tr>
        </thead>
      </table>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
