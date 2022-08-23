import React from "react";
import RoomIndexItem from './room_index_item';


class RoomIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateFilter();
  }

  render() {
    const { rooms } = this.props;

    return (
      <div className="index_page">
    <div className="index_page_all_rooms">
      {rooms.map(room => (
        <RoomIndexItem
          room={room}
          key={room.id}
        />
      ))}
    </div>
    </div>
    )
  }
}
  
export default RoomIndex;
