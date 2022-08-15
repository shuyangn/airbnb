import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ( {currentUser} ) => (
  <header className="nav-bar">
    <h1>Enjoybnb</h1>
    <h4>Welcome { currentUser.username }!</h4>
  </header>
);


export default Greeting;