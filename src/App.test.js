import { render, cleanup } from "@testing-library/react";
import App from "./App";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

afterEach(cleanup);

it("Renders correctly", () => {
  const { asFragment } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(
    asFragment(
      <Router history={history}>
        <App />
      </Router>
    )
  ).toMatchSnapshot();
});
