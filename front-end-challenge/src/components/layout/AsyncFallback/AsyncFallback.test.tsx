import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import AsyncFallback from "../AsyncFallback";

jest.mock("../../ui/Spinner", () => () => <div data-testid="spinner" />);
jest.mock(
  "../FallbackContainer",
  () =>
    ({
      className,
      children,
    }: {
      className: string;
      children: React.ReactNode;
    }) => (
      <div data-testid="fallback" className={className}>
        {children}
      </div>
    ),
);

describe("AsyncFallback component", () => {
  it("renders children when not loading or error", () => {
    render(
      <AsyncFallback isLoading={false} isError={false}>
        <span>Actual Content</span>
      </AsyncFallback>,
    );
    expect(screen.getByText("Actual Content")).toBeInTheDocument();
    expect(screen.queryByTestId("fallback")).toBeNull();
  });

  it("renders errorContent inside FallbackContainer when isError is true", () => {
    render(
      <AsyncFallback
        isLoading={false}
        isError={true}
        errorContent="Custom Error"
        className="error-class"
      >
        <span>Child</span>
      </AsyncFallback>,
    );
    const fallback = screen.getByTestId("fallback");
    expect(fallback).toHaveClass("error-class");
    expect(fallback).toHaveTextContent("Custom Error");
    expect(screen.queryByText("Child")).toBeNull();
  });

  it("uses default errorContent when isError and no errorContent provided", () => {
    render(
      <AsyncFallback isLoading={false} isError={true}>
        <span>Child</span>
      </AsyncFallback>,
    );
    const fallback = screen.getByTestId("fallback");
    expect(fallback).toHaveTextContent("Ocorreu um erro");
  });

  it("renders loadingContent inside FallbackContainer when isLoading is true and not error", () => {
    render(
      <AsyncFallback isLoading={true} isError={false} className="load-class">
        <span>Child</span>
      </AsyncFallback>,
    );
    const fallback = screen.getByTestId("fallback");
    expect(fallback).toHaveClass("load-class");
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
    expect(screen.queryByText("Child")).toBeNull();
  });

  it("uses custom loadingContent when provided", () => {
    render(
      <AsyncFallback
        isLoading={true}
        isError={false}
        loadingContent={<span>Loading Now</span>}
      >
        <span>Child</span>
      </AsyncFallback>,
    );
    const fallback = screen.getByTestId("fallback");
    expect(fallback).toHaveTextContent("Loading Now");
    expect(screen.queryByText("Child")).toBeNull();
  });

  it("matches snapshot for error state", () => {
    const { asFragment } = render(
      <AsyncFallback isLoading={false} isError={true} errorContent="Err">
        <div>Child</div>
      </AsyncFallback>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot for loading state", () => {
    const { asFragment } = render(
      <AsyncFallback isLoading={true} isError={false}>
        <div>Child</div>
      </AsyncFallback>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
