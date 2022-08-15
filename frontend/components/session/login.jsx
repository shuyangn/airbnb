import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
    .then(() => this.props.history.push('/'));
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
        <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            Please {this.props.formType} or {this.props.navLink}
            {this.renderErrors()}
            <div className="login-form">
            <br/>
            <label>Username:
                <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                />
            </label>
            <br/>
            <label>Email:
                <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                />
            </label>
            <br/>
            <label>Password:
                <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
        </form>
        </div>
    );
    }
}

export default Login;