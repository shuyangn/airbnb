import { RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, REMOVE_RESERVATION, CREATE_RESERVATION  } from '../actions/reservation_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ROOM } from '../actions/room_actions';

const reservationsReducer = (state = {}, action) => {
    
    Object.freeze(state);
    let newState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, {[action.reservation.id]:action.reservation})
        case RECEIVE_RESERVATIONS:
            if (action.reservations){
                return action.reservations ;
            }
            else {
                return state;
            }
        
        case REMOVE_RESERVATION:    
            delete newState[action.reservation.id];
            return newState;
        // case CREATE_RESERVATION:
        //     newState[action.reservation.id] = action.reservation;
        //     return newState;
        case RECEIVE_ROOM:
            return Object.assign({}, action.reservations);
        case LOGOUT_CURRENT_USER:
            return {};
        
        default:
            return state;
    }
}

export default reservationsReducer;