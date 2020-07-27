import React, { useState } from 'react';
import Post from '../posts/motivations';
import { NavLink, Route } from 'react-router-dom';
import PostForm from '../forms/addPost';
import './header.scss';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'

import Form from '../auth/forms';


const Home = props => {

  return (
    <Container fluid>
      <Row className="bigHeader">
        <Container className="header" fluid>
          <Row className="nav">
            <Col md={2} className="logo"></Col>
            <Col md={{ span: 3, offset: 7 }} className="sign">
              <Form />
            </Col>
          </Row>
          <Row className="secondRow">
            <Col  xs={6} md={4} className="image"></Col>
            <Col xs={12} md={8} className="text" >
              <div className="sp-container">
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
      </Row>
    </Container>
  )
}

export default Home;

