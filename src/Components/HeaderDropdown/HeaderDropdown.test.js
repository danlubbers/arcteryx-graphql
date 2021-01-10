import { render, fireEvent } from "@testing-library/react";
import HeaderDropdown from "./HeaderDropdown";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

test("user clicked Clothing", () => {
  const { getByText } = render(
    <Router history={history}>
      <HeaderDropdown />
    </Router>
  );
  fireEvent.click(getByText("Clothing"));
});

test("user clicked Packs", () => {
  const { getByText } = render(
    <Router history={history}>
      <HeaderDropdown />
    </Router>
  );
  fireEvent.click(getByText("Packs"));
});
