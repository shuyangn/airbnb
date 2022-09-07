import * as ReservationAPIUtil from "../util/reservation_api_util";

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const CREATE_RESERVATION = "CREATE_RESERVATION";

export const receiveReservations = (reservations) => {
  return {
      type: RECEIVE_RESERVATIONS,
      data: {reservations}
  }
}

export const receiveReservation = (payload) => {
  return {
      type: RECEIVE_RESERVATION,
      reservation: payload.reservation,
      user: payload.user
  }
}

export const removeReservation = (reservationId) => {
  return {
      type: REMOVE_RESERVATION,
      reservationId
  }
}

export const storeReservation = (reservation) => {
  return {
      type: CREATE_RESERVATION,
      reservation
  }
}


export const fetchReservations = () => (dispatch) => {
  return ReservationAPIUtil.fetchReservations()
  .then((reservations) => dispatch(receiveReservations(reservations)))
}

export const fetchReservation = (id) => (dispatch) => {
  return ReservationAPIUtil.fetchReservation(id)
  .then((reservation) => dispatch(receiveReservation(reservation)))
}

export const createReservation = (reservation, roomId) => (dispatch) => {
  return ReservationAPIUtil.createReservation(reservation, roomId)
      .then(payload => dispatch(receiveReservation(payload)))
}

export const updateReservation = (reservation) => (dispatch) => {
  return ReservationAPIUtil.updateReservation(reservation)
  .then(reservation => dispatch(receiveReservation(reservation)))
}

export const deleteReservation = (reservationId) => dispatch => {
  
  return ReservationAPIUtil.deleteReservation(reservationId)
  .then(reservationId => dispatch(deleteReservation(reservationId)))
}