import React , {useContext} from 'react';


//Components importation
import Header from './components/header/homeHeader';
// import LoggedHeader from './components/header/loggedHeader';
import Body from './components/body/body';
import Dashboard from './components/dashboard/dashboard'
import {LoginContext} from './components/auth/context';
import Show from './components/auth/show';
import Footer from './components/footer/footer';
import NewUser from './components/dashboard/newUser';
import Chat from './components/chat/chat';


const App = props =>{
  let user = useContext(LoginContext);
  return(
    <>
    <Show condition={!user.loggedIn}>
      <Header/>
      <Body/>
      
    </Show>
     
    <Show condition={user.loggedIn}>
      {/* < add header two instead of header one here /> */}
      {/* <LoggedHeader/> */}
      <Dashboard/>
      <Chat/>
    </Show>


    {/* if this is a new user show this : */}
        {/* <NewUser/> */}



      

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