import { connect } from 'react-redux';
import React from 'react';
import { login, signup, clearErrors } from '../../actions/session_actions';
import Login from './login';
import { openModal, closeModal } from '../../actions/modal_actions' ;

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    otherForm: (
      <p>Don't have an account? &nbsp;&nbsp;
        <a className="other-form-link" onClick={() => dispatch(openModal('signup'))}>
          Sign up
        </a>
      </p>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);