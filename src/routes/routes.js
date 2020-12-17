import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../App";
import Product from "../Components/Product/Product";
import Products from "../views/products";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route exact path="/product" component={Product} /> */}
      <Route exact path="/product/:slug" component={Product} />
    </Switch>
  );
};

export default Routes;
