import React from "react";
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import ModalContainer from './modal/modal';
import RoomIndexContainer from './rooms/room_index_container';
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/rooms" component={RoomIndexContainer}/>
    </Switch>

    {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <AuthRoute exact path="/login" component={LogInFormContainer} /> */}
    
  </div>
);

export default App;