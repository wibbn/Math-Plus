import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import indexRoutes from "routes/index.jsx";
// import Config from 'config'

import "assets/scss/material-kit-react.css";
import "assets/scss/self_stile.css";

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
     <Switch>
         {indexRoutes.map((prop, key) => <Route path={prop.path} key={key} component={prop.component} />)}
     </Switch>
    </Router>,
    document.getElementById("root")
);
