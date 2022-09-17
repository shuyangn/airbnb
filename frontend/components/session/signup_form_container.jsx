import { connect } from 'react-redux';
import React from 'react';
import { login, signup, clearErrors } from '../../actions/session_actions';
import Signup from './signup';
import { openModal, closeModal } from '../../actions/modal_actions' ;
import { fetchReservations } from '../../actions/reservation_actions';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    fetchReservations: (userId) => dispatch(fetchReservations(userId)),
    otherForm: (
      <p> Already have an account? &nbsp;&nbsp;
        <a className="other-form-link" onClick={() => dispatch(openModal('login'))}>
          Log in
        </a>
      </p>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);