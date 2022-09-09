import { RECEIVE_ROOMS, RECEIVE_ROOM } from '../actions/room_actions';
import {RECEIVE_RESERVATIONS} from '../actions/reservation_actions';

const roomsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_ROOMS:
        return action.rooms;
      case RECEIVE_ROOM:
        // debugger
        nextState[action.room.id] = action.room;
        return nextState;
      case RECEIVE_RESERVATIONS:
        return Object.assign({}, state, action.payload.rooms)
      default:
        return state;
    }
  };
  
  export default roomsReducer;