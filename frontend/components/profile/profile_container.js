import Profile from './profile'
import { connect } from 'react-redux'
import {fetchReservations, removeReservation} from '../../actions/reservation_actions'

const mSTP = (state) => {
    return {
        reservations: state.entities.reservations,
        currentUser: state.session.currentUser,
        rooms: state.entities.rooms
    }
}

const mDTP = (dispatch) => {
    return {
        fetchReservations: (userId) => dispatch(fetchReservations(userId)),
        removeReservation: (reservation) => dispatch(removeReservation(reservation))
    }
}

export default connect(mSTP, mDTP)(Profile);
