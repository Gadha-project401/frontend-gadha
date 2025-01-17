import React , {useContext} from 'react';


//Components importation
import Header from './components/header/homeHeader';
import Body from './components/body/body';
import Dashboard from './components/dashboard/dashboard'
import {LoginContext} from './components/auth/context';
import Show from './components/auth/show';
import Footer from './components/footer/footer';
import NewUser from './components/dashboard/newUser';
import Chat from './components/chat/chat';
import Loader from './components/loader/loader';
import About from './components/aboutus/aboutus'
import MotivationPage from './components/motivationPage/motivationPage'

const App = props =>{
  let user = useContext(LoginContext);

  return(
    <>

<Show condition={user.active.about}> 
      <About />
     </Show>



    <Show condition={user.loader}>
      <Loader/>
    </Show>

    <Show condition={!user.loggedIn}>
      <Show condition={user.active.homepage}>

      <Header/>
      <Body/>
      
      </Show>
      
    </Show>
     
    <Show condition={user.loggedIn}>

     

      <Show condition={user.active.homepage}>
        <Dashboard/>
        
      </Show>

      <Show condition={user.active.newUser}>
        <NewUser/>
      </Show>

      <Show condition={user.chat}>
        <Chat/>
      </Show>

      <Show condition={user.active.motivationPage}>
        <MotivationPage/>
        
      </Show>

    </Show>

    <Footer/>

    </>
  )
}

export default App;
