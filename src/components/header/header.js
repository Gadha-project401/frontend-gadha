import React from 'react';
import './header.scss';

import Login from '../auth/login';

const Header = props =>{
  return(
    <header>
      <h1>Gadha Project Header</h1>
      <Login/>
    </header>
  )
}

export default Header;