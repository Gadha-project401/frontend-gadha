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
      signupError:false,
      active:{homepage:true,dashboard:false,publicGoals:false,about:false,newUser:false},
      activePage:this.activePage,
      loader:false,
      activateLoader:this.activateLoader,
    }
  }

  activePage =value => {
    this.setState({active:value});
  }

  activateLoader = value =>{
    this.setState({loader:value});
  }
  
  login = (username,password) => {
    this.setState({loader:true});
    
    superagent.get(`${API}/signin`)
    .auth(username,password)
    .then(res=>{
      this.validateToken(res.body.token)
    })
    .catch(e=>{
      console.error(e);
      this.setState({error:true,loader:false});
    });
  }

  signup = (username,fullName,password,gender,country,birthday,profilePic) => {
    this.setState({loader:true});

    let userObject = {};
    
    //Add profile picture only if it exists
    profilePic ? userObject = {username,fullName,password,gender,country,birthday,profilePic} : userObject = {username,fullName,password,gender,country,birthday};

    superagent.post(`${API}/signup`)
    .send(userObject)
    .then(res=>{
      this.validateToken(res.body.token,true);
    })
    .catch(e=>{
      console.log(e);
      this.setState({signupError:true,loader:false});
    });
  }

  logout = () => {
    this.setLoginState(false, null, {});
  }

  validateToken = (token,newUser) => {
    try{
      let user = jwt.verify(token, process.env.REACT_APP_PASSKEY);
      if(newUser){
        this.setState({active:{homepage:false,dashboard:false,publicGoals:false,about:false,newUser:true}})
      }
      this.setLoginState(true, token, user);
    } catch (e){
      this.setState({loader:false});
      this.logout();
      console.log(e)
    }
  }

  setLoginState = (loggedIn, token, user) => {
    cookie.save('gadha-auth', token);
    this.setState({token, loggedIn, user,error:false,loader:false});
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