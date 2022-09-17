import { connect } from 'react-redux';
import { fetchRoom } from '../../actions/room_actions';
import { selectRoom } from '../../reducers/selectors';
import RoomShow from './room_show';
import { openModal } from '../../actions/modal_actions';
import {createReservation} from '../../actions/reservation_actions';
import { fetchReservations } from '../../actions/reservation_actions';

const mapStateToProps = (state, { match }) => {
  const roomId = parseInt(match.params.roomId);
  const currentRoom = state.session.currentRoom;
  // const room = state.entities.rooms[match.params.roomId];
 const room = selectRoom(state.entities, roomId);
 
  return {
    roomId,
    room,
    currentRoom,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRoom: id => dispatch(fetchRoom(id)),
  openModal: formType => dispatch(openModal(formType)),
  fetchReservations: (userId) => dispatch(fetchReservations(userId)),
  createReservation: reservation => dispatch(createReservation(reservation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomShow);

