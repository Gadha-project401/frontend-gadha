import React, {useContext} from "react";
import { LoginContext } from '../auth/context';
import Show from '../auth/show';
import { Container, Row, Col, Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import anasPng from './img/anas.png';
import israaPng from './img/israa.jpg';
import ammarPng from './img/ammar.jpg';
import fatemaPng from './img/fatema.jpg';
import logo from "../../img/logo-m.png";
import img911 from "../../img/911-2.png";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import giphy from './img/giphy.gif'
import './aboutus.scss';

const About = props => {
    let user = useContext(LoginContext);
  return (
    <>

<div class="w-100" id="fixed-nav">
        <div class="row" id="inside-header">
          <div class="col-11 mx-auto d-flex">
            <div class="col-6">
              <img src={logo} alt='img' class="inside-logo" />
            </div>
            <div class="col-6 ">
              <div class="col-12 d-flex flex-row-reverse p-0">

                <Show condition={!user.loggedIn}>
                    <button className="aboutus-buttons buttons" onClick={e => user.activePage({homepage:true,dashboard:false,publicGoals:false,about:false,newUser:false})} > <span className="aboutus-Home">Home</span> </button>
                </Show>
              <Show condition={user.loggedIn} >

                <div class="circle-img">
                   
                  <Dropdown >
                    <Dropdown.Toggle variant="failed" id="dropdown-basic">
                      <img className="profilePicc rounded-circle inside-logo user-img-drop ayKelme" alt="profilePicc" src={user.user.userPic} width="70px" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item >
                        <h5 className="username">{user.user.username}</h5></Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item className="dropItem" onClick={e => user.activePage({homepage:true,dashboard:false,publicGoals:false,about:false,newUser:false})}> <p>Dashboard</p> </Dropdown.Item>
                      <Dropdown.Item className="dropItem" onClick={e => user.activePage({homepage:false,dashboard:false,publicGoals:false,about:true,newUser:false})}> <p>About Gadha</p> </Dropdown.Item>
                      <Dropdown.Item className="dropItem">
                      <button className="dropdown-btn" onClick={user.logout}>Logout</button> 
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div>
                    <img style={{cursor:'pointer'}} src={img911} alt='chatIcon' onClick={user.activateChat}/>
                </div>
                
                </Show>
                
              </div>
            </div>
          </div>
          <div class="col-12"></div>
        </div>
      </div>














    <Container className="aboutus-contatiner">
        <Col className='aboutus-pHead'>
        <p className="aboutus-intro">We are proud to present our team members:</p>
        </Col>

<Row className="aboutus-IMG-section1">

   <div className="IMG-section1">
        <div className="flip-card"> 
        <div class="flip-card-inner"> 
        <div class="flip-card-front"> 
           <img className="anasImg" src={anasPng} alt="" />
           <h2 className="anasH2">Anas Zain</h2> 
           </div>
           <div class="flip-card-back"> 
           <p>My name is Anas Zain.  I'm a Mechanical Engineering gradutae and I'm currently a Full-Stack Software Developer.</p> 
            <a href="https://www.linkedin.com/in/anas-zain-64a4841a1/" target='_blank' rel="noopener noreferrer" className="linkedIn a-social"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="https://github.com/X-Anas-X"  target='_blank' rel="noopener noreferrer" className="github a-social"> <FontAwesomeIcon icon={faGithub} size="2x" /></a>
        </div>
        </div>
        </div>

        </div>
        

   <div className="IMG-section2">
        <div className="flip-card"> 
        <div class="flip-card-inner"> 
        <div class="flip-card-front"> 
           <img className="anasImg" src={ammarPng} alt="" />
           <h2 className="anasH2">Ammar Badwan</h2> 
           </div>
           <div class="flip-card-back">
           <p>Hello all my name is Ammar Badwan I'm a software developer, specifically a MERN full stack developer.</p> 
            <a href="https://www.linkedin.com/in/ammar-badwan/" target='_blank' rel="noopener noreferrer" className="linkedIn a-social"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="https://github.com/badwan95" target='_blank' rel="noopener noreferrer" className="github a-social"> <FontAwesomeIcon icon={faGithub} size="2x" /></a>
        </div>
        </div>
        </div>

        </div>
        </Row>

<div className="aboutus-birdGif">
   <img src={giphy} alt=""/>

</div>



        <Row className="aboutus-IMGsection2">

        <div className="IMG-section3">

        <div className="flip-card"> 
        <div class="flip-card-inner"> 
        <div class="flip-card-front"> 
           <img className="anasImg" src={israaPng} alt="" />
           <h2 className="anasH2">israa othman</h2> 
           </div>
           <div class="flip-card-back">
           <p>Full Stack Developer
               Graduated from Hashemite University 2018
              I'm interested about building full-stack web applications</p> 
            <a href="https://www.linkedin.com/in/israa-othman-b9a279158/" target='_blank' rel="noopener noreferrer" className="linkedIn a-social"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="https://github.com/israaothman" target='_blank' rel="noopener noreferrer" className="github a-social"> <FontAwesomeIcon icon={faGithub} size="2x" /></a>
        </div>
        </div>
        </div>

        </div>


        <div className="IMG-section4">
    
        <div className="flip-card"> 
        <div class="flip-card-inner"> 
        <div class="flip-card-front"> 
           <img className="anasImg" src={fatemaPng} alt="" />
           <h2 className="anasH2">Fatema Owedah</h2> 
           </div>
           <div class="flip-card-back">
           <p>My name is Fatema Al-Zahraa Owedah I am A Software Developer with background in Architecture.</p> 
            <a href="https://www.linkedin.com/in/fatema-owedah-111568127/" target='_blank' rel="noopener noreferrer" className="linkedIn a-social"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="https://github.com/fatemaowedah" target='_blank' rel="noopener noreferrer" className="github a-social"> <FontAwesomeIcon icon={faGithub} size="2x" /></a>
        </div>
        </div>
        </div>

        </div>
        </Row>

    </Container>

    </>
  )
}

export default About;