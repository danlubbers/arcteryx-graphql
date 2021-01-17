import { render, cleanup, waitFor } from "@testing-library/react";
import RenderProducts from "./RenderProducts";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// This gets rid of the unexpected network error issue
global.fetch = require("jest-fetch-mock");

const history = createBrowserHistory();

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

const productsData = [
  {
    title: "ALPHA SV JACKET MEN'S",
    imagesCollection: {
      items: [
        {
          url: "testImage.png",
        },
      ],
    },
  },
];

test("renders title", async () => {
  const { debug, getByTestId } = render(
    <Router history={history}>
      <RenderProducts renderProducts={productsData} />
    </Router>
  );
  await waitFor(() => getByTestId("product-title"));
  expect(getByTestId("product-title").textContent).toBe(productsData[0].title);
  debug();
});
