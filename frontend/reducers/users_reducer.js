import { RECEIVE_CURRENT_USER  } from "../actions/session_actions";
import { RECEIVE_ROOM } from "../actions/room_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        // case RECEIVE_ROOM:
        //     return Object.assign({}, state, {[action.room.user.id]: action.room.user});
        default:
            return state;
    };
};


export default usersReducer;