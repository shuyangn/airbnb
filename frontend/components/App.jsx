import React from "react";
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    </Switch>
  </div>
);

export default App;