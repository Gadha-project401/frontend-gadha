import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
require('dotenv').config();
const secret = process.env.REACT_APP_PASSKEY;

const API = process.env.REACT_APP_API;

export const LoginContext = React.createContext();

class LoginProvider extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      loggedIn: false,
      login: this.login,
      logout: this.logout,
      signup:this.signup,
      user: {},
    }
  }

  login = (username,password) => {
      console.log(API);
    superagent.get(`${API}/signin`)
    .set('content-type', 'application/json')
    .auth(username,password)
    .then(result=>{
      console.log('This is the basic auth result');
      console.log(result);
    })
    .catch(e=>console.error(e));
  }

  logout = () => {
    this.setLoginState(false, null, {});
  }

  validateToken = token => {
    try{
      let user = jwt.verify(token, process.env.REACT_APP_PASSKEY);
      console.log(user);
      this.setLoginState(true, token, user);

    } catch (e){
      this.logout();
      console.log(e)
    }
  }

  setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    this.setState({token, loggedIn, user});
  }

  componentDidMount() {
    const cookieToken = cookie.load('auth');
    const token = cookieToken || null;
    this.validateToken(token);
  }
  


  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}

export default LoginProvider;