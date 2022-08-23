import React from 'react';
import { FaAirbnb } from 'react-icons/fa';
import SearchBar from '../search/search_bar';
import { Link } from "react-router-dom";


const NavBar2 = (props) => {
  const { currentUser, logout } = props;

  const openModal = (formType) => {
    return e => {
      e.preventDefault();
      props.openModal(formType)
    };
  };

  const display = currentUser ? (
    <div className='welcome-info2'>
      <h3>Welcome {currentUser.username}!</h3>
      <div className="logout-btn2" onClick={logout}>Log out</div>
    </div>
  ) : (
    <div  className='btn2'>
      <div className="signup-btn2" onClick={openModal('signup')}>Sign up</div>
      <div className="login-btn2" onClick={openModal('login')}>Log in</div>
    </div>
  );


  return (
    <header className="nav-bar2">
      <div className='logo-container2'>
        <a className='logo-img2' href="#">
        <FaAirbnb style={{color: '#FF385C', fontSize: '40px'}} />
        </a>
      </div>
      <div className='nav-bar-search-bar'>
      <SearchBar
        // maxGuest={maxGuest}
        // updateFilter={updateFilter}
      />
      </div>

      <div>
        {display}
      </div>
    </header>
  )
}

export default NavBar2;