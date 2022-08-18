import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ModalContainer from '../modal/modal';
import SearchBar from '../search/search_bar';
import Footer from '../footer/footer';
class Splash extends React.Component {
    render () {
      return (
        <div className="dashboard-background">
          <NavBarContainer />
          <ModalContainer />
          <SearchBar />
          
          <footer>
             <Footer />
          </footer>
        </div>

      );
    }
  }
  
  export default Splash;