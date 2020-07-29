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
import NewUser from './components/dashboard/newUser' 

const App = props =>{
  let user = useContext(LoginContext);
  return(
    <>
    {/* <Header/> */}


    {/* if it is not new user show this  */}

    <Show condition={user.loggedIn}>
      <Dashboard/>
    </Show>


    {/* if this is a new user show this : */}
        {/* <NewUser/> */}



      {/* <Body/>

      <Footer/> */}
    </>
  )
}

export default App;

/*
    <Show condition={!user.loggedIn}>
      <Header/>
    </Show>
*/