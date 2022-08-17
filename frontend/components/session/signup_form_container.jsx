import { connect } from 'react-redux';
import React from 'react';
import { login, signup } from '../../actions/session_actions';
import Signup from './signup';
import { openModal, closeModal } from '../../actions/modal_actions' ;

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
    otherForm: (
      <p> Already have an account? &nbsp;&nbsp;
        <a onClick={() => dispatch(openModal('login'))}>
          Log In
        </a>
      </p>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);