import React , {useContext, useEffect} from 'react';


//Components importation
import Header from './components/header/homeHeader';
import LoggedHeader from './components/header/loggedHeader';
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
    <button onClick={e=>{user.activePage({homepage:false,dashboard:false,publicGoals:false,about:false,newUser:true})}}>Change state</button>
    <Show condition={!user.loggedIn}>
      <Header/>
      <Body/>
      
    </Show>
     
    <Show condition={user.loggedIn}>
      {/* < add header two instead of header one here /> */}
      <LoggedHeader/>
       <Show condition={user.active.homepage}>
      <Dashboard/>
      </Show>
      <Show condition={user.active.newUser}>
       <NewUser/>
    </Show>
      {/* <Chat/> */}
    </Show>


    {/* if this is a new user show this : */}
 



      

      {/* <Footer/> */}
    </>
  )
}

export default App;

/*
    <Show condition={!user.loggedIn}>
      <Header/>
    </Show>
*/