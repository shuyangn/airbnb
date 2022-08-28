import * as ReservationAPIUtil from "../util/reservation_api_util";

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const DELETE_RESERVATION = "DELETE_RESERVATION";
export const CHANGE_RESERVATION = "CHANGE_RESERVATION";

export const receiveReservations = (payload) => {
  return {
      type: RECEIVE_RESERVATIONS,
      payload
  }
}

export const receiveReservation = (reservation) => {
  return {
      type: RECEIVE_RESERVATION,
      reservation
  }
}

export const deleteReservation = (reservation) => {
  return {
      type: DELETE_RESERVATION,
      reservation
  }
}

export const changeReservation = (reservation) => {
  return {
      type: CHANGE_RESERVATION,
      reservation
  }
}


export const fetchReservations = (userId) => (dispatch) => {
  return ReservationAPIUtil.fetchReservations(userId)
  .then(reserves => dispatch(receiveReservations(reserves)))
}
export const createReservation = (reservation) => (dispatch) => {
  return ReservationAPIUtil.createReservation(reservation)
      .then(reserve => dispatch(receiveReservation(reserve)))
}

export const updateReservation = (reservation) => (dispatch) => {
  return ReservationAPIUtil.updateReservation(reservation)
  .then(reserve => dispatch(receiveReservation(reserve)))
}

export const removeReservation = (reservation) => dispatch => {
  
  return ReservationAPIUtil.removeReservation(reservation)
  .then(reservation => dispatch(deleteReservation(reservation)))
}