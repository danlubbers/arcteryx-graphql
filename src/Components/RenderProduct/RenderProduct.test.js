import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import RenderProduct from "./RenderProduct";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders product data", async () => {
  const productData = {
    title: "ALPHA SV JACKET MEN'S",
    description:
      "Our most durable GORE-TEX PRO shell is designed for severe (SV) alpine conditions. Alpha Series: Climbing and alpine focused systems. | SV: Severe Weather.",
    price: 799.0,
    image: "testImage",
    color: "Dynasty",
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(productData),
    })
  );

  await act(async () => {
    render(
      <Router history={history}>
        <RenderProduct />
      </Router>,
      container
    );
  });

  console.log(
    "render",
    container.querySelectorAll("[data-testid='title']").textContent
  );
  expect(container.querySelector("[data-testid='title']").textContent).toBe(
    productData.title
  );

  global.fetch.mockRestore();
});
