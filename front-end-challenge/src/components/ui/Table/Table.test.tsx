import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { createRef } from "react";

import { Table, TableBody, TableHead, TableRow } from "../Table";

describe("Table component", () => {
  it("renders children inside a table and merges className", () => {
    const { container } = render(
      <Table className="extra-table">
        <TableHead>
          <th>H1</th>
        </TableHead>
        <TableBody>
          <TableRow>
            <td>Cell</td>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const outer = container.firstElementChild as HTMLElement;
    expect(outer).toHaveClass(
      "mt-10",
      "rounded-2xl",
      "bg-dark",
      "border",
      "border-quaternary",
      "overflow-hidden",
      "extra-table",
    );

    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    expect(screen.getByText("H1")).toBeInTheDocument();
    expect(screen.getByText("Cell")).toBeInTheDocument();
  });

  it("forwards ref to inner scroll container", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Table ref={ref}>
        <tbody />
      </Table>,
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveClass("max-h-[450px]", "overflow-y-auto");
  });
});

describe("TableHead component", () => {
  it("renders a thead with correct class and children", () => {
    const { container } = render(
      <table>
        <TableHead>
          <th>Header</th>
        </TableHead>
      </table>,
    );
    const thead = container.querySelector("thead");
    expect(thead).toHaveClass("text-slate-300");
    const tr = thead!.querySelector("tr");
    expect(tr).toHaveClass("divide-x", "divide-y", "divide-quaternary");
    expect(tr).toContainHTML("<th>Header</th>");
  });
});

describe("TableBody component", () => {
  it("renders a tbody with correct class and children", () => {
    const { container } = render(
      <table>
        <TableBody>
          <tr>
            <td>Row</td>
          </tr>
        </TableBody>
      </table>,
    );
    const tbody = container.querySelector("tbody");
    expect(tbody).toHaveClass("divide-x", "divide-y", "divide-quaternary");
    expect(tbody).toContainHTML("<td>Row</td>");
  });
});

describe("TableRow component", () => {
  it("renders a tr with default and extra classes and children", () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow className="extra-row">
            <td>Data</td>
          </TableRow>
        </tbody>
      </table>,
    );
    const tr = container.querySelector("tr");
    expect(tr).toHaveClass(
      "hover:bg-slate-800/40",
      "divide-x",
      "divide-y",
      "divide-quaternary",
      "extra-row",
    );
    expect(tr).toContainHTML("<td>Data</td>");
  });

  it("forwards ref to tr element", () => {
    const ref = createRef<HTMLTableRowElement>();
    render(
      <table>
        <tbody>
          <TableRow ref={ref}>
            <td>Data</td>
          </TableRow>
        </tbody>
      </table>,
    );
    expect(ref.current).toBeInstanceOf(HTMLTableRowElement);
  });
});
