import React from "react";
import RoomIndexItem from './room_index_item';
import Loader from '../loader/loader';

class RoomIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
    setTimeout(() => this.setState({loading: false}), 2000);
  }

  componentDidMount() {
    this.props.updateFilter();
  }

  render() {
    const { rooms } = this.props;
    if (this.state.loading) {
      return (
        <div className="loader-container">
          <Loader loading={this.state.loading} />
        </div>
      );
    }

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
