import React from "react";
import GreetingContainer from './greeting/greeting_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
  <div>
    <Route path="/" component={NavBarContainer}/>
    <Route exact path="/" component={Home} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <AuthRoute path="/login" component={LogInFormContainer} />
  </div>
);

export default App;