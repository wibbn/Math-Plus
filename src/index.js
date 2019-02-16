import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-react.css";
import "assets/scss/self_stile.css";

import Landing from 'views/LandingPage/Landing';
import Dashboard from 'views/Auth/Dashboard';
import LogIn from 'views/Auth/LogIn';
import Test from 'views/Learning/Test.jsx';

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route exact path='/' component= {Landing} />
            <Route path='/dashboard' component= {Dashboard} />
            <Route path='/login' component= {LogIn} />
            <Route path='/test/:id' component= {Test} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
