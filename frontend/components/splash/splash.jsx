import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ModalContainer from '../modal/modal';
import SearchBar from '../search/search_bar';
class Splash extends React.Component {
    render () {
      return (
        <div className="dashboard-background">
          <NavBarContainer />
          <ModalContainer />
          <SearchBar />
        </div>

      );
    }
  }
  
  export default Splash;