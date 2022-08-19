import React from "react";
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
    render () {
      return (
        <div className="bar">
          <div className="location">
            <p>Location</p>
            <input type="text" placeholder="Where are you going?" />
          </div>
          <div className="check-in">
            <p>Check in</p>
            <input type="text" placeholder="Add dates" />
          </div>
          <div className="check-out">
            <p>Check out</p>
            <input type="text" placeholder="Add dates" />
          </div>
          <div className="guests">
            <p>Guests</p>
            <input type="text" placeholder="Add guests" />
          </div>
          <div className="search-btn">
            <Link to = '/rooms'>
            <button><FaSearch /></button>
            </Link>
          </div>
        </div>
      );
    }
  }

  export default SearchBar;