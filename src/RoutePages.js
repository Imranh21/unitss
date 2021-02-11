import React from "react";
import { Switch, Route } from "react-router-dom";
import EditPost from "./components/EditPost";
import Home from "./components/Home";
import NewPost from "./components/NewPost";

const RoutePages = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add" component={NewPost} />
      <Route path="/edit/:id" component={EditPost} />
    </Switch>
  );
};

export default RoutePages;
