import React, { useContext } from 'react';
import { LoginContext } from '../auth/context';
import Show from '../auth/show';
import './loggedHeader.scss';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const LoggedHeader = props => {
    let user = useContext(LoginContext);
  return (
    <Container fluid>
      <Row className="bigHeader">
        <Container className="header" fluid>
          <Row className="nav">
            <Col md={2} className="loggedInLogo"></Col>
              <Col> 
            <Dropdown >
              <Dropdown.Toggle variant="failed" id="dropdown-basic">
                <img className="user-img-drop ayKelme" alt="profilePic" src={user.user.userPic} width="70px"/>
             </Dropdown.Toggle>
             <Dropdown.Menu>
             <Dropdown.Item >
                 <img className="col-img ayKelme" alt="profilePic" src={user.user.userPic} width="50px"/> 
                 <h5 className="username">{user.user.username}</h5></Dropdown.Item>
                <Dropdown.Divider />
                    <Dropdown.Item className="dropItem" href="#"> <a href="#">Dashboard</a> </Dropdown.Item>
                    <Dropdown.Item className="dropItem" href="#">  <a href="#">Motivational Posts</a> </Dropdown.Item>
                    <Dropdown.Item className="dropItem" href="#"> <a href="#">Users Achievements</a> </Dropdown.Item>
                    <Dropdown.Item className="dropItem" href="#"> <a href="#">Chat</a> </Dropdown.Item>   
                    <Dropdown.Item className="dropItem" href="#"> <a href="#">About Gadha</a> </Dropdown.Item>
                    <Dropdown.Item className="dropItem"> 
                     <Show condition={user.loggedIn}>   <button className="dropdown-btn" onClick={user.logout}>Logout</button>   </Show> 
                    </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
                </Col>
            <Col md={{ span: 3, offset: 7 }} className="sign">
            </Col>
          </Row>
          <Row className="secondRow">
          </Row>
        </Container>
      </Row>
    </Container>
  )
}
export default LoggedHeader;