import React from 'react';
import LoginContext from './components/auth/context';

//Components importation
import Header from './components/header/header';
import Body from './components/body/body';
import Signup from './components/auth/signup';
import Footer from './components/footer/footer';
import Dashboard from './components/dashboard/dashboard';
import { Route } from 'react-router-dom';

const App = props =>{
  return(
    <>
      <LoginContext>
        <Header/>

        <Route path="/signup" exact> <Signup/> </Route>
        <Route path="/dashboard" component={Dashboard}/>
        <Body/>

        <Footer/>
      </LoginContext>
    </>
  )
}

export default App;