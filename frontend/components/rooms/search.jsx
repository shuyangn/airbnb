import React from 'react';

import RoomIndex from './room_index';
import NavBar2Container from "../nav_bar2/nav_bar2_container";
import ModalContainer from '../modal/modal';
import FakeFilter from '../fake_filter/fake_filter';

const Search = ({ rooms, maxGuest, updateFilter }) => (
  <div className="user-pane">
        <NavBar2Container 
                maxGuest={maxGuest}
                updateFilter={updateFilter}
        />
        <ModalContainer />
        <FakeFilter />
    <div className="rooms-sidebyside">
      <RoomIndex rooms={rooms} updateFilter={updateFilter} />
    </div>
  </div>
);

export default Search;
