// React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import LoginContext from './components/auth/context';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

// Redux Dependencies
import store from './store/index';
import { Provider } from 'react-redux';

class Main extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <LoginContext>
            <App/>
          </LoginContext>
        </BrowserRouter>
      </Provider>
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<Main/>, root);