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
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push('/users'));
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
        <div className="session-form">
        <h2>Please {this.props.formType} or {this.props.navLink}</h2>
        <p>{this.renderErrors()}</p>
        <form>
            <label>Email:
            <input
            type="text"
            value={this.state.email}
            onChange={this.update('email')}
            />
            </label>
            <label>Username:
            <input
            type="text"
            value={this.state.username}
            onChange={this.update('username')}
            />
            </label>
            <label>Password:
            <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            />
            <button onClick={this.handleSubmit}>Sign Up</button>
            </label>
        </form>
        </div>
    );
    }
}

export default Signup;