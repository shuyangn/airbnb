import { CREATE_RESERVATION } from '../actions/reservation_actions';

const createReservationReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case CREATE_RESERVATION:
            return action.reservation;
        default:
            return state;
    }
}

export default createReservationReducer;