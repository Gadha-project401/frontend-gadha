import React from 'react';
import LoginContext from './components/auth/context';

//Components importation
import Header from './components/header/homeHeader';
import Body from './components/body/body';
import Signup from './components/auth/signup';
import Footer from './components/footer/footer';
import { Route } from 'react-router-dom';

const App = props =>{
  return(
    <>
      <LoginContext>
        <Header/>
        {/* <Body/>
        <Footer/> */}
      </LoginContext>
    </>
  )
}

export default App;