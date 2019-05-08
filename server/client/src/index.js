import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import Root from "./Root";
import history from "./components/history";
import App from "./components/App";
import errorPage from "./components/404/404";

ReactDOM.render(
  <Root>
    <Router>
      <Switch history={history}>
        <App>
          <Route path="/" exact component={home} />
          <Route path="/:someParam" component={errorPage} />
        </App>
      </Switch>
    </Router>
  </Root>,
  document.querySelector("#root")
);
