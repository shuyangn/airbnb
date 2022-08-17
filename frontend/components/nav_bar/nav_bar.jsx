import React from 'react';
import { Link } from 'react-router-dom';

const navBar = (props) => {
  const { currentUser, logout } = props;
  
  const openModal = (formType) => {
    return e => {
      e.preventDefault();
      props.openModal(formType)
    };
  };

const display = currentUser ? (
    <div className='welcome-info'>
      <h3>Welcome {currentUser.username}!</h3>
      <div className="logout-btn" onClick={logout}>Log out</div>
    </div>
  ) : (
    <div  className='btn'>
      <div className="signup-btn" onClick={openModal('signup')}>Sign up</div>
      <div className="login-btn" onClick={openModal('login')}>Log in</div>
    </div>
  );
  return (
    <header className="nav-bar">
      <div className='logo-container'>
        <a className='logo-img' href="#/">
        </a>
      </div>
      <div>
        {display}
      </div>
    </header>
  )
}

export default navBar;