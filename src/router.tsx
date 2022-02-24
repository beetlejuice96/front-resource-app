import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { NoMatch } from "./pages/No-match";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Switch>
  );
};
export default Routes;
