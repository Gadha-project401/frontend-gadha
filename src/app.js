import React , {useContext} from 'react';


//Components importation
import Header from './components/header/homeHeader';
import Body from './components/body/body';
import Dashboard from './components/dashboard/dashboard'
import {LoginContext} from './components/auth/context';
import Show from './components/auth/show';
import Signup from './components/auth/signup';
import Footer from './components/footer/footer';
import { Route } from 'react-router-dom';

const App = props =>{
  let user = useContext(LoginContext);
  return(
    <>
    <Header/>

    <Show condition={user.loggedIn}>
      <Dashboard/>
    </Show>

      <Body/>

      <Footer/>
    </>
  )
}

export default App;

/*
    <Show condition={!user.loggedIn}>
      <Header/>
    </Show>
*/