import { RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, DELETE_RESERVATION, CHANGE_RESERVATION  } from '../actions/reservation_actions';

const reservationsReducer = (state = {}, action) => {
    
    Object.freeze(state);
    let newState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, {[action.reservation.reservation.id]:action.reservation.reservation})
        case RECEIVE_RESERVATIONS:
            if (action.payload.reservations){
                return action.payload.reservations ;
            }
            else {
                return state;
            }
        
        case DELETE_RESERVATION:    
            delete newState[action.reservation.reservation.id];
            return newState;
        case CHANGE_RESERVATION:
            newState[action.reservation.id] = action.reservation;
            return newState;
        default:
            return state;
    }
}

export default reservationsReducer;