import { render, fireEvent } from "@testing-library/react";
import Search from "./search";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

test("Search Render Check", () => {
  const { getByTestId } = render(
    <Router history={history}>
      <Search />
    </Router>
  );
  const searchInput = getByTestId("searchInput");
  expect(searchInput).toBeTruthy();
});

describe("Input Change", () => {
  it("onChange", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Search />
      </Router>
    );
    const searchInput = getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "jacket sv" } });
    expect(searchInput.value).toBe("jacket sv");
  });
});
