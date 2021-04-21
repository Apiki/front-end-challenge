import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";

function renderWithRouter(component) {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{ component }</Router>),
    history,
  });
}

export default renderWithRouter;