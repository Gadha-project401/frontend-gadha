import React, { useState } from 'react';
import Post from '../posts/motivations';
import { NavLink, Route } from 'react-router-dom';
import PostForm from '../forms/addPost';
import './header.scss';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import logoheader from '../../img/logoheader.png';

import Form from '../auth/forms';


const Home = props => {

  return (
  
    <Container fluid className="header1">
      <Container className="header" container>
        <Row className="nav">
          <Col xs={4} md={2} xl={2} lg={2} >
            <img src={logoheader} alt="" className="headerLogo" />
          </Col>
          <Col xs={4} md={6} xl={6} lg={6}  ></Col>
          <Col className="sign" xs={4} md={4} xl={4} lg={4} >
            <Form />
          </Col>
        </Row>
        <Row className="secondRow">
          <Col xs={12} md={8} className="text" >
            <div className="sp-container justify-content-center">
              <div className="sp-content">
                {/* <div className="sp-globe"></div> */}
                <h2 className="frame-1">Missing The Inspiration You Need To Go ?!</h2>
                <h2 className="frame-2">Don't have A Support Team To Help You Change ?! </h2>
                <h2 className="frame-3">Times Fly By Without Being Able To Achive Your Goals ?!</h2>
                <h2 className="frame-4">Don't Worry!</h2>
                <h2 className="frame-5">
                  <span>With Gadha, You Can ,</span>
                  <span> And You Will ,</span>
                  <span> Change Your Life.</span>
                </h2>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  )
}

export default Home;

