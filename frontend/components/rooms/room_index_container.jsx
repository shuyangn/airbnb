import { connect } from 'react-redux';
import RoomIndex from './room_index';

// Actions
import { fetchRooms } from '../../actions/room_actions';

// const mapStateToProps = (state, ownProps) => {
//   return({
//   todos: allTodos(state),
//   });
// };

const mapDispatchToProps = (dispatch) => {
  return ({
  requestRooms: () => dispatch(fetchRooms())
  });
};

export default connect(
  null,
  mapDispatchToProps
)(RoomIndex);