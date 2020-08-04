import React from 'react';
import './header.scss';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoheader from '../../img/logoheader.png';

import Form from '../auth/forms';


const Home = props => {

  return (
    <Container fluid className="header1">
      <Container fluid>
        <Row className="nav">
          <Col xs={4} md={2} xl={2} lg={2} className="justify-content-center text-center">
            <img src={logoheader} alt="" className="headerLogo" />
          </Col>
          <Col xs={4} md={6} xl={6} lg={6} className="justify-content-center text-center" ></Col>
          <Col xs={4} md={4} xl={4} lg={4} className="justify-content-center text-center sign" >
            <Form />
          </Col>
        </Row>
        <Row className="secondRow">
        <Col xs={12} md={12} xl={4} lg={4} className="justify-content-center text-center" ></Col>
          <Col xs={12} md={12} xl={8} lg={8} className="text" >
            <div className="sp-container justify-content-center">
              <div className="sp-content">
                {/* <div className="sp-globe"></div> */}
                <h2 className="frame-1">Missing The Inspiration <br /> You Need To Go ?!</h2>
                <h2 className="frame-2">Don't have A Support <br /> Team To Help You Change ?! </h2>
                <h2 className="frame-3">Times Fly By Without <br /> Being Able To Achive Your Goals ?!</h2>
                <h2 className="frame-4">Don't Worry!</h2>
                <h2 className="frame-5">
                  <span>With Gadha, You Can,</span>
                  <span> And You Will,</span>
                  <span> Change Your Life.</span>
                </h2>
              </div>
              <div className="sp-content-res">

              <h1>Missing The Inspiration <br /> You Need To Go ?!</h1>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  )
}

export default Home;

