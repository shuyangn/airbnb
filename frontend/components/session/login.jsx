import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  closeModal(e) {
    //e.preventDefault();
    this.props.closeModal();
  }  

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
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

  componentWillUnmount() {
    this.props.clearErrors();
  }


  loginDemo(e) {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    });

    let demo_email = 'guest@email.com';
    let demo_pw = '112233';
    
    const emailCallback = () => {
     setTimeout(() => {
        if (demo_email.length > 0) {
          this.setState({
            email: this.state.email.concat(demo_email[0]),
            password: this.state.password
          });
          demo_email = demo_email.slice(1);
          emailCallback();
        } else {
          pwCallback();
        }
      }, 75);
    }
    

    const pwCallback = () => {
     setTimeout(() => {
        if (demo_pw.length > 0) {
          this.setState({
            email: this.state.email,
            password: this.state.password.concat(demo_pw[0])
          });
          demo_pw = demo_pw.slice(1);
          pwCallback()
        } else {
          setTimeout(() => {
            this.props.login(this.state)
              .then(this.closeModal);
          }, 500);
        }
      }, 75);
    }
    // closemodal + clear session errors
    this.props.clearErrors();
    emailCallback();
  }


  render() {
    
  return (


    <div className="form-container">
      <div className="whole-exit">
      <a className="exit-modal" onClick={this.closeModal}><img src="https://img.icons8.com/small/20/000000/delete-sign.png"/></a>
      <h1>Log in</h1>
      </div>

      <form onSubmit={this.handleSubmit} className="form-box">
         <a 
          href="#/" 
          onClick={this.loginDemo} 
          className="form-submit-btn">Log in with demo account</a>
          <div className="modal__divider-container">
          <p className="modal__divider-content">or</p>
          </div>

          <br/>
          <div className='session-errors'>{this.renderErrors()}</div>
          <div className="form-items">
          <br/>
          <label>
              <input type="text"
              value={this.state.email}
              placeholder="email"
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
          <button value={this.props.formType} className="session-button">Log in</button>
          </div>
      </form>
      <footer className="session-form-footer">
      {this.props.otherForm}
    </footer>
      </div>
  );
  }
}

export default Login;