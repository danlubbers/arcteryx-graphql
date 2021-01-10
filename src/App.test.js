import renderer from "react-test-renderer";
import App from "./App";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

it("Renders correctly", () => {
  const tree = renderer.create(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(tree).toMatchSnapshot();
});
