import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Routes from "./routes";

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it("should navigate to the home page by checking for the background image", () => {
  const { getByTestId, container } = renderWithRouter(<Routes />);
  fireEvent.click(getByTestId("home-page-link"));
  expect(container.innerHTML).toMatch("backgroundImage");
});
