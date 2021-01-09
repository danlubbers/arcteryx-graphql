import { render } from "@testing-library/react";
import App from "./App";

test("Parent Component", () => {
  const { getByText } = render(<App />);
  expect(getByText("Header")).toEqual(true);
});
