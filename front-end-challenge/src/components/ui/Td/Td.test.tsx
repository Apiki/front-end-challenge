import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Td from "../Td";

describe("Td component", () => {
  it("renders a td element with default classes and children", () => {
    render(
      <table>
        <tbody>
          <tr>
            <Td>Cell Content</Td>
          </tr>
        </tbody>
      </table>,
    );
    const cell = screen.getByText("Cell Content");
    expect(cell.tagName).toBe("TD");
    expect(cell).toHaveClass(
      "px-4",
      "h-[40px]",
      "whitespace-nowrap",
      "text-center",
      "text-sm",
      "text-white",
      "text-normal",
      "tracking-wide",
      "font-inter",
    );
  });

  it("merges a custom className when provided", () => {
    render(
      <table>
        <tbody>
          <tr>
            <Td className="extra-class another-class">Custom Cell</Td>
          </tr>
        </tbody>
      </table>,
    );
    const cell = screen.getByText("Custom Cell");
    expect(cell).toHaveClass("extra-class", "another-class");
  });

  it("passes arbitrary HTML props to the td element", () => {
    render(
      <table>
        <tbody>
          <tr>
            <Td data-testid="td-test" aria-label="label" title="my-title">
              Test
            </Td>
          </tr>
        </tbody>
      </table>,
    );
    const cell = screen.getByTestId("td-test");
    expect(cell).toHaveAttribute("aria-label", "label");
    expect(cell).toHaveAttribute("title", "my-title");
  });

  it("supports the colSpan prop", () => {
    render(
      <table>
        <tbody>
          <tr>
            <Td colSpan={3}>Spanned Cell</Td>
          </tr>
        </tbody>
      </table>,
    );
    const cell = screen.getByText("Spanned Cell");
    expect(cell).toHaveAttribute("colspan", "3");
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(
      <table>
        <tbody>
          <tr>
            <Td className="snapshot-class" colSpan={2} data-extra="x">
              Snap
            </Td>
          </tr>
        </tbody>
      </table>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
