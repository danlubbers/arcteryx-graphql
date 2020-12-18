import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../App";
import Product from "../Components/Product/Product";
import Products from "../views/Products/products";
import Search from "../views/Search/search";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/product/:slug" component={Product} />
      <Route exact path="/search" component={Search} />
    </Switch>
  );
};

export default Routes;
