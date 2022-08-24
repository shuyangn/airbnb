import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { BsFillPersonFill, BsDoorOpen } from "react-icons/bs";
import { FiShare, FiHeart, FiCalendar} from "react-icons/fi";
import { GiDesk } from "react-icons/gi";

const RoomDetail = ({ room }) => {
  return (
    <div className='room-detail-all'>
      <div className='room-detail-title'>
        <p>A Big House | Just a Big House.</p>
      </div>
      <div className='room-detail-title-below-info'>
        <div><AiFillStar /> 4.97 <BsFillPersonFill /> Superhost · {room.city}</div>
        <div><FiShare /> Share  <FiHeart /> Save </div>
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

      <div className='room-detail-two-half'>
        <div className='room-detail-left-half'>
          <div className='detail-host'>
            <div className='detail-host-words'>
              <p id='detail-host-words-line1'>Entire home hosted by Donald Duck</p>
              <p id='detail-host-words-line2'>{room.max_guests} guests · {room.num_beds} beds · {room.num_baths} baths</p>
            </div>
            <div className='detail-host-img'>
              <img src={window.donald_duck} />
            </div>
          </div>

          <div className='detail-pros'>
            <div className='detail-pros-item'>
              <div className='detail-pros-item-comp'><GiDesk /></div>
              <div className='detail-pros-item-words'>
                <p className='detail-pros-item-words-line1'>Great for remote work</p>
                <p className='detail-pros-item-words-line2'>Fast wifi at 91 Mbps, plus a dedicated workspace in a common area.</p>
              </div>
            </div>
            <div className='detail-pros-item'>
              <div className='detail-pros-item-comp'><BsDoorOpen /></div>
              <div className='detail-pros-item-words'>
                <p className='detail-pros-item-words-line1'>Self check-in</p>
                <p className='detail-pros-item-words-line2'>Check yourself in with the keypad.</p>
              </div>
            </div>
            <div className='detail-pros-item'>
              <div className='detail-pros-item-comp'><FiCalendar /></div>
              <div className='detail-pros-item-words'>
                <p className='detail-pros-item-words-line1'>Free cancellation 3 days before check-in</p>
              </div>
            </div>
          </div>

          <div className='detail-aircover'>
            <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"/>
            <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>          
          </div>

          <div className='detail-description'>
            <p> {room.description} </p>
          </div>
        </div>



        <div className='room-detail-right-half'>
          <p>good</p>
          <p>bye</p>
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