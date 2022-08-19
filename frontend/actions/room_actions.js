import * as RoomApiUtil from '../util/room_api_util';

export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
export const RECEIVE_ROOM = 'RECEIVE_ROOM';

const receiveRooms = payload => ({
    type: RECEIVE_ROOMS,
    payload
});

const receiveRoom = room => ({
    type: RECEIVE_ROOM,
    room
});

export const fetchRooms = () => dispatch => (
    RoomApiUtil.fetchRooms().then(rooms => dispatch(receiveRooms(rooms)))
);


export const fetchRoom = id => dispatch => (
    RoomApiUtil.fetchRoom(id).then(room => dispatch(receiveRoom(room)))
);
