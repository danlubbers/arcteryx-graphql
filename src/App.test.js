import { render } from "@testing-library/react";
import App from "./App";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

test("Parent Component", () => {
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(getByText("Header")).toEqual(true);
});
