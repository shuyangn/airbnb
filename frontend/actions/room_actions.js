import * as RoomApiUtil from '../util/room_api_util';

export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
export const RECEIVE_ROOM = 'RECEIVE_ROOM';

const receiveRooms = rooms => ({
    type: RECEIVE_ROOMS,
    rooms
});

const receiveRoom = payload => ({
    type: RECEIVE_ROOM,
    room: payload.room,
    reservations: payload.reservations
});

export const fetchRooms = filters => dispatch => (
    RoomApiUtil.fetchRooms(filters).then(rooms => (dispatch(receiveRooms(rooms))))
);


export const fetchRoom = id => dispatch => (
    RoomApiUtil.fetchRoom(id).then(payload => dispatch(receiveRoom(payload)))
);
