import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

test("user clicked mens", () => {
  const { getByText } = render(
    <Router history={history}>
      <Header />
    </Router>
  );
  fireEvent.click(getByText("Mens"));
});
