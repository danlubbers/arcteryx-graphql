import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";

test("user clicked mens", () => {
  const { getByText } = render(<Header />);
  fireEvent.click(getByText("Mens"));
});
