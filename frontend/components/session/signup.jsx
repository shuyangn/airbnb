import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div className="form-container">
        <div className="whole-exit">
        <a className="exit-modal" onClick={this.closeModal}><img src="https://img.icons8.com/small/20/000000/delete-sign.png"/></a>
        <h1>Sign up</h1>
      </div>

        <form onSubmit={this.handleSubmit} className="form-box">
          <br/>
          {this.renderErrors()}
          <div className="form-items">
            <br/>
            <label>
              <input type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')}
                className="form-input"
              />
            </label>
            <br/>
            <label>
              <input type="text"
                value={this.state.email}
                placeholder="Email"
                onChange={this.update('email')}
                className="form-input"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="form-input"
              />
            </label>
            <br/>
            <button value={this.props.formType} className="session-button">{this.props.formType}</button>
          </div>
        </form>
        <footer className="session-form-footer">
        {this.props.otherForm}
      </footer>
      </div>
    );
  }
}

export default Signup;