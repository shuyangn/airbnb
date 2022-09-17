import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_RESERVATION} from '../actions/reservation_actions';
import {RECEIVE_ROOM} from '../actions/room_actions';

const _nullSession = {currentUser: null};

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    let newState = { ...state };
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({},state, { currentUser: action.user });
        case LOGOUT_CURRENT_USER:
            return Object.assign({},state,_nullSession);
        case RECEIVE_ROOM:
            return Object.assign({}, state, {currentRoom: action.room} );
        case RECEIVE_RESERVATION:
            // debugger
            let oldRes = newState.currentRoom.reservations;
            let newRes = Object.assign({}, oldRes, {[action.reservation.id]: action.reservation})
            newState.currentRoom.reservations = newRes;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;