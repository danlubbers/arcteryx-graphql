import { Route, Switch } from "react-router-dom";
import App from "../App";
import Product from "../views/product/product";
import Products from "../views/Products/products";
import Search from "../views/Search/search";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      {/* Mens Products */}
      <Route exact path="/products/mens/clothing" component={Products} />
      <Route exact path="/products/mens/packs" component={Products} />
      <Route exact path="/products/mens/footwear" component={Products} />
      {/* Womens Products */}
      <Route exact path="/products/womens/clothing" component={Products} />
      <Route exact path="/products/womens/packs" component={Products} />
      <Route exact path="/products/womens/footwear" component={Products} />

      <Route exact path="/product/:slug" component={Product} />
      <Route exact path="/search" component={Search} />
    </Switch>
  );
};

export default Routes;
