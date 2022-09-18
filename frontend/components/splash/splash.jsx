import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ModalContainer from '../modal/modal';
import SearchBar from '../search/search_bar';
import { Link } from "react-router-dom";

class Splash extends React.Component {
    render () {
      return (
        <div className="dashboard-background">
          <NavBarContainer />
          <ModalContainer />
          {/* <SearchBar /> */}
          <div className='quote'>
            <p>"I haven't been everywhere, but it's on my list."</p>
          </div>
          <Link to = '/rooms'>
          <button className='splash-entry-button'><p>expore your next trip</p></button>
          </Link>
        </div>

      );
    }
  }
  
  export default Splash;