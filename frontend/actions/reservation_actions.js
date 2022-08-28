import * as ReservationAPIUtil from "../util/reservation_api_util";

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const CREATE_RESERVATION = "CREATE_RESERVATION";

const receiveReservations = (filter, value) => ({
  type: RECEIVE_RESERVATIONS,
  filter,
  value
});

const receiveReservation = payload => {
  return {
    type: RECEIVE_RESERVATION,
    reservation: payload.reservation,
    user: payload.user
  };
};

const removeReservation = reservationId => ({
  type: REMOVE_RESERVATION,
  reservationId
});

export const storeReservation = reservation => ({
  type: CREATE_RESERVATION,
  reservation
});

export const fetchReservations = (filter, value) => dispatch => {
  return ReservationAPIUtil.fetchReservations(filter, value).then(reservations =>
    dispatch(receiveReservations(reservations))
  );
};

export const fetchReservation = id => dispatch =>
  ReservationAPIUtil.fetchReservation(id).then(reservation =>
    dispatch(receiveReservation(reservation))
  );

export const createReservation = (reservation, roomId) => dispatch => {
  return ReservationAPIUtil.createReservation(reservation, roomId).then(payload =>
    dispatch(receiveReservation(payload))
  );
};

export const updateReservation = reservation => dispatch =>
  ReservationAPIUtil.updateReservation(reservation).then(reservation =>
    dispatch(receiveReservation(reservation))
  );

export const deleteReservation = reservationId => dispatch =>
  ReservationAPIUtil.deleteReservation(reservationId).then(reservationId =>
    dispatch(removeReservation(reservationId))
  );