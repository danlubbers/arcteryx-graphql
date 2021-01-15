import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const renderWithRouter = (component) => {
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

test("user clicked Mens", () => {
  const { getByText } = renderWithRouter(<Header />);
  fireEvent.click(getByText("Mens"));
});

test("user clicked Womens", () => {
  const { getByText } = renderWithRouter(<Header />);
  fireEvent.click(getByText("Womens"));
});

test("user clicked Search Icon", () => {
  history.push = jest.fn();
  const { getByTestId } = renderWithRouter(<Header />);
  fireEvent.click(getByTestId("search"));
  expect(history.push).toHaveBeenCalledWith("/search");
});
