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
    slug: "alpha-sv-jacket",
    title: "ALPHA SV JACKET MEN'S",
    imagesCollection: {
      items: [
        {
          url: "alpha-sv.png",
        },
      ],
    },
  },
  // {
  //   slug: "beta-sv-jacket-rebird",
  //   title: "BETA SV JACKET MEN'S",
  //   imagesCollection: {
  //     items: [
  //       {
  //         url: "beta-sv.png",
  //       },
  //     ],
  //   },
  // },
];

test("<RenderProducts /> checks slug link and renders image & title", async () => {
  fetch.mockResponseOnce(JSON.stringify(productsData));

  const { debug, getByTestId, getAllByTestId } = render(
    <Router history={history}>
      <RenderProducts renderProducts={productsData} />
    </Router>
  );
  await waitFor(() => getAllByTestId("product-slug"));

  expect(getByTestId("product-slug").getAttribute("href")).toBe(
    `/product/${productsData[0].slug}`
  );
  expect(getByTestId("product-image").src).toBe(
    `http://localhost/${productsData[0].imagesCollection.items[0].url}`
  );
  expect(getByTestId("product-title").textContent).toBe(productsData[0].title);
  expect(getAllByTestId("product-slug").length).toBe(1);
  // debug();
});
