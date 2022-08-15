import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({ currentUser, logout }) => {
const display = currentUser ? (
    <div className='welcome-info'>
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout} className='logout'>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <h1 className="logo">ENJOYBNB</h1>
      <div>
        {display}
      </div>
    </header>
  )
}

export default navBar;