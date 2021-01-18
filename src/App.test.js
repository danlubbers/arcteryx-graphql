import { render, cleanup } from "@testing-library/react";
import App from "./App";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

afterEach(cleanup);

test("<App />, renders correctly", () => {
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

test("<App />, checks for header component", () => {
  const { debug, getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(getByTestId("header-component")).toBeTruthy();
});

test("<App />, checks for modal component", () => {
  const { debug, getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(getByTestId("modal-component")).toBeTruthy();
});

test("<App />, checks for a background image", () => {
  const { debug, getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(getByTestId("background-image")).toBeTruthy();
});
