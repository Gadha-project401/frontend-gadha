import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
require('dotenv').config();

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
      error: false,
    }
  }

  login = (username,password) => {
      console.log(API);
    superagent.get(`${API}/signin`)
    .auth(username,password)
    .then(res=>{
      this.validateToken(res.body.token)
    })
    .catch(e=>{
      console.error(e);
      this.setState({error:true});
    });
  }

  logout = () => {
    this.setLoginState(false, null, {});
  }

  validateToken = token => {
    try{
      let user = jwt.verify(token, process.env.REACT_APP_PASSKEY);
      this.setLoginState(true, token, user);
    } catch (e){
      this.logout();
      console.log(e)
    }
  }

  setLoginState = (loggedIn, token, user) => {
    cookie.save('gadha-auth', token);
    this.setState({token, loggedIn, user,error:false});
  }

  componentDidMount() {
    const cookieToken = cookie.load('gadha-auth');
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