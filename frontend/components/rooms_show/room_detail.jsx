import React from 'react';


const RoomDetail = ({ room }) => {
  return (
    <div>
      <div className='room-detail-title'>
        <p>A Big House | Just a Big House</p>
      </div>
      <div className='room-detail-images'>
        <div className='room-detail-images-items-big'>
        <img className="show-page-img" src={window.house}/>
        </div>

        <div className='room-detail-images-items-small'>
        <img className="show-page-img" src={window.house}/>
        <img className="show-page-img" src={window.house}/>
        <img className="show-page-img" src={window.house}/>
        <img className="show-page-img" src={window.house}/>
        </div>
      
      </div>
      <ul className="room-list">
        <li>Price: {room.price}</li>
        <li>Description: {room.description}</li>
        <li>max_guests: {room.max_guests}</li>
        <li>num_beds: {room.num_beds}</li>
        <li>num_baths: {room.num_baths}</li>
        <li>city: {room.city}</li>
        <li>Latitude: {room.lat}</li>
        <li>Longitude: {room.long}</li>
      </ul>
    </div>
  );
};

export default RoomDetail;