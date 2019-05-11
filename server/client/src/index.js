import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Root from "./Root";
import history from "./components/history";
import App from "./components/App";
import Signin from "./components/auth/Signin";
import Dashboard from "./components/home/Dashboard";
import errorPage from "./components/404/404";

ReactDOM.render(
  <Fragment>
    <Root>
      <Router history={history}>
        <Switch>
          <Route path="/signin" exact component={Signin} />
          <App>
            <Route path="/home" exact component={Dashboard} />
          </App>
        </Switch>
      </Router>
    </Root>
  </Fragment>,
  document.querySelector("#root")
);
