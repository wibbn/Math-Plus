import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from "history";

import Landing from 'views/LandingPage/Landing';
import LogIn from 'views/Auth/LogIn';
import Register from 'views/Auth/Register';
import Test from 'views/Learning/Test.jsx';

var hist = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <Router history={hist}>
                <Switch>
                    <Route exact path='/' component= {Landing} />
                    <Route path='/login' component= {LogIn} />
                    <Route path='/register' component={Register} />
                    <Route path='/test/:id' component= {Test} />
                </Switch>
            </Router>
        );
    }
}

export default App;