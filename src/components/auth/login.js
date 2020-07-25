import React from 'react';
import Show from './show';
import { NavLink } from 'react-router-dom';
import { LoginContext } from './context';


class Login extends React.Component{
  static contextType = LoginContext;
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
      };
    }

  handleChange = e => {
    this.setState({ [e.target.name] : e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
  }

  render(){
      return(
          <>
            <Show condition={this.context.loggedIn}>
              <button onClick={this.context.logout}>Logout</button>
            </Show>
            <Show condition={!this.context.loggedIn}>
              <form onSubmit={this.handleSubmit} >
                    <input 
                      placeholder="Enter your username"
                      name="username"
                      onChange={this.handleChange}
                    />
                  <input
                    placeholder="Enter your password"
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                  />
                <button>Sign In</button>
                <NavLink to="/signup"><button>Sign Up</button></NavLink>
              </form> 
            </Show>
            <Show condition={this.context.error}>
                <p>Invalid username/password, please try again.</p>
            </Show>
          </>
      )
  }
  
}

export default Login;
