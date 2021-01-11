import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

test("user clicked Mens", () => {
  const { getByText } = render(
    <Router history={history}>
      <Header />
    </Router>
  );
  fireEvent.click(getByText("Mens"));
});

test("user clicked Womens", () => {
  const { getByText } = render(
    <Router history={history}>
      <Header />
    </Router>
  );
  fireEvent.click(getByText("Womens"));
});

test("user clicked Search Icon", () => {
  history.push = jest.fn();
  const { getByTestId } = render(
    <Router history={history}>
      <Header />
    </Router>
  );
  fireEvent.click(getByTestId("search"));
  expect(history.push).toHaveBeenCalledWith("/search");
});
