import React from "react";
import { FaSearch } from 'react-icons/fa';

class SearchBar extends React.Component {
    render () {
      return (
        <div class="bar">
          <div class="location">
            <p>Location</p>
            <input type="text" placeholder="Where are you going?" />
          </div>
          <div class="check-in">
            <p>Check in</p>
            <input type="text" placeholder="Add dates" />
          </div>
          <div class="check-out">
            <p>Check out</p>
            <input type="text" placeholder="Add dates" />
          </div>
          <div class="guests">
            <p>Guests</p>
            <input type="text" placeholder="Add guests" />
          </div>
          <div class="search-btn">
            <button><FaSearch /></button>
          </div>
        </div>
      );
    }
  }

  export default SearchBar;