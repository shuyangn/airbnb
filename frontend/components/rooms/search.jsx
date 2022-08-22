import React from 'react';
import FilterForm from './filter_form';
import RoomIndex from './room_index';


const Search = ({ rooms, minGuest, maxGuest, updateFilter }) => (
  <div className="user-pane">
    <div className="rooms-sidebyside">
      <FilterForm
        minGuest={minGuest}
        maxGuest={maxGuest}
        updateFilter={updateFilter}
      />
      <RoomIndex rooms={rooms} />
    </div>
  </div>
);

export default Search;
