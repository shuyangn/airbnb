import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.login(this.state)
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


        //   Please {this.props.formType} or {this.props.navLink}
        //   {this.renderErrors()}
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

            <label>Password:
            <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            />
            <button onClick={this.handleSubmit}>Log In</button>
            </label>
        </form>
        </div>
    );
    }
}

export default Login;