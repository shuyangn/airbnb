import React from 'react';
import { withRouter } from 'react-router-dom';


class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const roomId = this.props.room.id;
    this.props.history.push(`/rooms/${roomId}`);
  }

  render() {
    const { country, city, price, image_urls} = this.props.room;
    return (
      <div className="room-index-item" onClick={this.handleClick} >
        <div className='index-item-image'>
          <img src={image_urls[0]}/>
        </div>
        <div className="index-item-info">
          <div className="index-item-info-i" id="index-item-info-i-city">
          <span className="index-item-copy">{city}</span>
          </div>
          <div className="index-item-info-i" id="index-item-info-i-city">
          <span className="index-item-copy">{country}</span>
          </div>
          <div className="index-item-info-i" id="index-item-info-i-price">
          <span className="index-item-copy">$ {price} night</span>
          </div>
        </div> 
      </div>
    );
  }
}

export default withRouter(IndexItem);