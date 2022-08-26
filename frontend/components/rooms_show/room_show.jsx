import React from 'react';
import { Link } from 'react-router-dom';
import RoomDetail from './room_detail';
import { ProtectedRoute } from '../../util/route_util';
import NavBar2Container from "../nav_bar2/nav_bar2_container";
import RoomMap from '../map/map';
import ModalContainer from '../modal/modal';


class RoomShow extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchRoom(this.props.roomId);
  }


  render() {
    const{ room, roomId, fetchRoom } = this.props;


    return(
      <div className="single-room-show">
        <NavBar2Container />          
        <ModalContainer />
        <div className="all-room-details">
          <RoomDetail room={room ? room : ''} />
        </div>
        <div className="single-room-map">
          <p>Where you will be</p>
          <RoomMap
            roomId={roomId}
            fetchRoom={fetchRoom}
          />
        </div>
        <div className="techs-info-container">
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

  }

}


export default RoomShow;