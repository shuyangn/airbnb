import { connect } from "react-redux";
import ReservationForm from "./reservation";
import { createReservation } from "../../action/reservation_action";
import moment from "moment";
import { storeReservation } from "../../action/reservation_action";
import { openModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
  const blockedDates = [];
  if (state.entities.reservations) {
    const reserved = Object.values(state.entities.reservations);
    reserved.forEach(reservation => {
      let sDate = moment(reservation.check_in);
      const eDate = moment(reservation.check_out);
      while (sDate < eDate) {
        blockedDates.push(sDate);
        sDate = moment(sDate, "MM/DD/YYYY").add(1, "days");
      }
    });
  }

  return {
    reservation: { startDate: null, endDate: null, numGuest: 1 },
    formType: "Create Booking",
    user: state.session.id,
    blockedDates
  };
};

const mdp = dispatch => {
  return {
    action: (reservation, roomId) => dispatch(createReservation(reservation, roomId)),
    storeReservation: reservation => dispatch(storeReservation(reservation)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(
  msp,
  mdp
)(ReservationForm);