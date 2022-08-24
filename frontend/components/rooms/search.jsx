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
    <div className="techs-info-container"  id='techs-info-col'>
      <div className="techs-info">
        <div className="techs-info-col">
          <p className="techs-info-title">Contact Info</p>
          <p>Shuyang Ning</p>
          <p>clairesyning@gmail.com</p>
          <p>New York, NY</p>
        </div>
        <div className="techs-info-col">
          <p className="techs-info-title">Language and Techs</p>
          <p>React/Redux</p>
          <p>Javascript</p>
          <p>Ruby on Rails</p>
          <p>PostgreSQL</p>
          <p>Google Maps</p>
          <p>CSS/HTML</p>
          <p>AWS S3</p>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
