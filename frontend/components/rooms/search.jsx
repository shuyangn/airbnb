import React from 'react';
import FilterForm from './filter_form';
import RoomIndex from './room_index';
import NavBar2Container from "../nav_bar2/nav_bar2_container";
import FakeFilter from '../fake_filter/fake_filter';

const Search = ({ rooms, maxGuest, updateFilter }) => (
  <div className="user-pane">
        <NavBar2Container />
        <FakeFilter />
    <div className="rooms-sidebyside">
      <FilterForm
        maxGuest={maxGuest}
        updateFilter={updateFilter}
      />
      <RoomIndex rooms={rooms} />
    </div>
  </div>
);

export default Search;
