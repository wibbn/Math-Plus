import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import {createBrowserHistory} from "history";

import Landing from 'views/LandingPage/Landing';
import LogIn from 'views/Auth/LogIn';
import Register from 'views/Auth/Register';
import Test from 'views/Learning/Test.jsx';

import {MuiThemeProvider} from '@material-ui/core/styles';
import Config from 'config/projectInfo';


let hist = createBrowserHistory();


class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={Config.theme}>
                <Router history={hist}>
                    <Switch>
                        <Route exact path='/' component={Landing}/>
                        <Route path='/login' component={LogIn}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/test/:id' component={Test}/>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;