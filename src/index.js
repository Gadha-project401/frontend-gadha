// React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
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
          <App/>
        </BrowserRouter>
      </Provider>
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<Main/>, root);