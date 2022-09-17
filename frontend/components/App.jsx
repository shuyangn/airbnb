import React from "react";
import NavBar2Container from './nav_bar2/nav_bar2_container';
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import Footer from './footer/footer';
import SearchContainer from './rooms/search_container';
import RoomShowContainer from './rooms_show/room_show_container';
import profileContainer from "./profile/profile_container";

const App = () => (
  <div>
    {/* <header>
      <NavBarContainer/>
    </header> */}
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <Route exact path="/rooms" component={SearchContainer}/>
      <Route exact path="/rooms/:roomId" component={RoomShowContainer} />
      <Route exact path="/profile" component={profileContainer}/>
    </Switch>
    
    <footer>
      <Footer />
    </footer>
    
  </div>
);

export default App;