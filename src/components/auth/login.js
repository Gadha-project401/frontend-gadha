import React from 'react';
import Show from './show';
import { LoginContext } from './context';
import './auth.scss';
import GoogleLogin from 'react-google-login'


class Login extends React.Component {
  static contextType = LoginContext;
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
  }

  responseGoogle=(response)=>{
    console.log('response',response);
    console.log('response obj',response.profileObj);
    let username = response.profileObj.email.split('@')[0];
    let authUser = {username:username,password:response.profileObj.googleId,profilePic:response.profileObj.imageUrl,}
    this.context.validateToken(response.accessToken);
  }

  render() {
    return (
      <>
        <Show condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Logout</button>
        </Show>
        <Show condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit} >
            <div className="row">
              <div className="input-group input-group-icon">
                <input
                  required
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  onChange={this.handleChange}
                />
                <div className="input-icon"><i className="fa fa-user"></i></div>
              </div>
              <div className="input-group input-group-icon">
                <input
                 required
                  placeholder="Enter your password"
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                />
                <div className="input-icon"><i className="fa fa-key"></i></div>
              </div>
            </div>
            <button className="signBtn">Sign In</button>
        <hr/>
        <p className="googleP">OR</p>

        <GoogleLogin className="googleBtn"
        clientId="971207669999-akhiugeha5tk0ohtuvqsost7rv9nr7af.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        />        
          </form>
        </Show>
        <Show condition={this.context.error}>
          <p className="invalid">Invalid username/password, please try again.</p>
        </Show>
      </>
    )
  }

}

export default Login;
