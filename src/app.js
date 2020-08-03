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
import Loader from './components/loader/loader';


const App = props =>{
  let user = useContext(LoginContext);
  return(
    <>

    <Show condition={user.loader}>
      <Loader/>
    </Show>

    <Show condition={!user.loggedIn}>
      <Header/>
      <Body/>
      
    </Show>
     
    <Show condition={user.loggedIn}>

      <LoggedHeader/>

      <Show condition={user.active.homepage}>
        <Dashboard/>
      </Show>

      <Show condition={user.active.newUser}>
        <NewUser/>
      </Show>

      <Chat/>
    </Show>

    <Footer/>
    </>
  )
}

export default App;
