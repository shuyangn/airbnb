import { connect } from 'react-redux';

import { fetchRoom } from '../../actions/room_actions';
import { selectRoom } from '../../reducers/selectors';
import RoomShow from './room_show';

const mapStateToProps = (state, { match }) => {
  const roomId = parseInt(match.params.roomId);
  // const room = state.entities.rooms[match.params.roomId];
 const room = selectRoom(state.entities, roomId);
  return {
    roomId,
    room
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRoom: id => dispatch(fetchRoom(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomShow);

