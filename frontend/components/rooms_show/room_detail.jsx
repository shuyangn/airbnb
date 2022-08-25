import React from 'react';
import { AiFillStar, AiOutlineWifi } from "react-icons/ai";
import { BsFillPersonFill, BsDoorOpen } from "react-icons/bs";
import { FiShare, FiHeart, FiCalendar} from "react-icons/fi";
import { GiDesk, GiComputerFan, GiToothbrush } from "react-icons/gi";
import { BiBath } from "react-icons/bi";
import { MdOutlineDryCleaning, MdOutlineLocalLaundryService, MdOutlineMicrowave, MdOutlineElevator } from "react-icons/md";

const RoomDetail = ({ room }) => {
  return (
    <div className='room-detail-all'>
      <div className='room-detail-title'>
        <p>{room.title}</p>
      </div>
      <div className='room-detail-title-below-info'>
        <div className='room-detail-title-below-info-left'><AiFillStar /> 4.97 <BsFillPersonFill /> Superhost · {room.city}, {room.country}</div>
        <div className='room-detail-title-below-info-right'><FiShare /> Share  <FiHeart /> Save </div>
      </div>

      <div className='room-detail-images'>

        <div className='room-detail-images-items-big'>
        <img className="show-page-img" src={room.image_urls[0]}/>
        </div>

        <div className='room-detail-images-items-small'>
        <img className="show-page-img" src={room.image_urls[1]}/>
        <img className="show-page-img" src={room.image_urls[2]}/>
        <img className="show-page-img" src={room.image_urls[3]}/>
        <img className="show-page-img" src={room.image_urls[4]}/>
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
                <p className='detail-pros-item-words-line1'>Free cancellation 1 year before check-in</p>
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

          <div className='detail-place-offers'>
            <div className='detail-place-offers-title'>
              <p>What this place offers</p>
            </div>
            <div className='detail-place-offers-items'>
              <div className='detail-place-offers-item'>
                <div className='detail-place-offers-item-comp'><BiBath /></div>
                <div className='detail-place-offers-item-word'>Giant bath</div>
              </div>
              <div className='detail-place-offers-item'>
                <div className='detail-place-offers-item-comp'><MdOutlineDryCleaning /></div>
                <div className='detail-place-offers-item-word'>Giant hangers</div>
              </div>
              <div className='detail-place-offers-item'>
                <div className='detail-place-offers-item-comp'><MdOutlineLocalLaundryService /></div>
                <div className='detail-place-offers-item-word'>Giant washer</div>
              </div>
              <div className='detail-place-offers-item'>
                <div className='detail-place-offers-item-comp'><GiComputerFan /></div>
                <div className='detail-place-offers-item-word'>Giant fan</div>
              </div>
              <div className='detail-place-offers-item'>
                <div className='detail-place-offers-item-comp'><GiToothbrush /></div>
                <div className='detail-place-offers-item-word'>Giant essentials</div>
              </div>
              <div className='detail-place-offers-item'>
                <div className='detail-place-offers-item-comp'><MdOutlineMicrowave /></div>
                <div className='detail-place-offers-item-word'>Giant microwave</div>
              </div>
              <div className='detail-place-offers-item'>
                <div className='detail-place-offers-item-comp'><AiOutlineWifi /></div>
                <div className='detail-place-offers-item-word'>Poor WiFi</div>
              </div>
              <div className='detail-place-offers-item'>
                <div className='detail-place-offers-item-comp'><MdOutlineElevator /></div>
                <div className='detail-place-offers-item-word'>Giant elevator</div>
              </div>             
            </div>
          </div>
        </div>



        <div className='room-detail-right-half'>
          <p>good</p>
          <p>bye</p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;