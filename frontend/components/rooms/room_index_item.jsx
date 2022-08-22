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
    const { city, price, image_urls} = this.props.room;
    return (
      <div className="room-index-item" onClick={this.handleClick} >
        <div className="index-item-info">
          <span className="index-item-category">Price:</span>
          <span className="index-item-copy">{price}</span>
          <span className="index-item-category">City:</span>
          <span className="index-item-copy">{city}</span>
        </div>
        <div className='index-item-image'>
          <img src={window.house}/>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexItem);