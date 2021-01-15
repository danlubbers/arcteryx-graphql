import { render, cleanup, screen } from "@testing-library/react";
import RenderProduct from "./RenderProduct";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

afterEach(cleanup);

describe("renders product data", () => {
  const productData = {
    title: "ALPHA SV JACKET MEN'S",
    description:
      "Our most durable GORE-TEX PRO shell is designed for severe (SV) alpine conditions. Alpha Series: Climbing and alpine focused systems. | SV: Severe Weather.",
    price: 799.0,
    image: "testImage",
    color: "Dynasty",
  };

  test("check title", () => {
    render(
      <Router history={history}>
        <RenderProduct />
      </Router>
    );

    // console.log(screen.getByTestId("title"));
    // expect(screen.getByTestId("title")).toHaveTextContent(productData.title);
  });
});
