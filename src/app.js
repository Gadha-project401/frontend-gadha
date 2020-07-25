import React from 'react';
import LoginContext from './components/auth/context';

//Components importation
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';

const App = props =>{
  return(
    <>
      <LoginContext>
        <Header/>
        <Body/>
        <Footer/>
      </LoginContext>
    </>
  )
}

export default App;