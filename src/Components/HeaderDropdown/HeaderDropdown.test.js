import { render, fireEvent } from "@testing-library/react";
import HeaderDropdown from "./HeaderDropdown";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

test("Clothing is a category", () => {
  const { getByText } = render(
    <Router history={history}>
      <HeaderDropdown />
    </Router>
  );
  fireEvent.click(getByText("Clothing"));
});

test("Packs is a category", () => {
  const { getByText } = render(
    <Router history={history}>
      <HeaderDropdown />
    </Router>
  );
  fireEvent.click(getByText("Packs"));
});

test("User clicked dynamic gender link to clothing", () => {
  history.push = jest.fn();
  const { getByTestId, gender } = render(
    <Router history={history}>
      <HeaderDropdown />
    </Router>
  );
  fireEvent.click(getByTestId(`gender-clothing`));
  expect(history.push).toHaveBeenCalledWith(`/products/${gender}/clothing`);
});

test("User clicked dynamic gender link to packs", () => {
  history.push = jest.fn();
  const { getByTestId, gender } = render(
    <Router history={history}>
      <HeaderDropdown />
    </Router>
  );
  fireEvent.click(getByTestId(`gender-packs`));
  expect(history.push).toHaveBeenCalledWith(`/products/${gender}/packs`);
});

// Todo: Add category in HeaderDropdown
// test("User clicked dynamic gender link to footwear", () => {
//   history.push = jest.fn();
//   const { getByTestId, gender } = render(
//     <Router history={history}>
//       <HeaderDropdown />
//     </Router>
//   );
//   fireEvent.click(getByTestId(`gender-footwear`));
//   expect(history.push).toHaveBeenCalledWith(`/products/${gender}/footwear`);
// });
