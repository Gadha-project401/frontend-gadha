import React, { useContext } from 'react';
import { Container, Row, Col, Card, Dropdown } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';


import { LoginContext } from '../auth/context';
import Show from '../auth/show';


import MotivationPost from "../forms/addPost";
import MotivationDiv from "../posts/motivations";

import logo from "../../img/logo-m.png";
import img911 from "../../img/911-2.png";

const MotivationPage = props => {
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
                                <div class="circle-img">
                                    <Dropdown >
                                        <Dropdown.Toggle variant="failed" id="dropdown-basic">
                                            <img className="profilePicc rounded-circle inside-logo user-img-drop ayKelme" alt="profilePicc" src={user.user.userPic} width="70px" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <h5 className="username">{user.user.username}</h5></Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item className="dropItem" onClick={e => user.activePage({ homepage: true, dashboard: false, publicGoals: false, about: false, newUser: false, motivationPage: false })}> <p>Dashboard</p> </Dropdown.Item>
                                            <Dropdown.Item className="dropItem" onClick={e => user.activePage({ homepage: false, dashboard: false, publicGoals: false, about: false, newUser: false, motivationPage: true })} > <p>911 Motivation</p> </Dropdown.Item>
                                            <Dropdown.Item className="dropItem" onClick={e => user.activePage({ homepage: false, dashboard: false, publicGoals: false, about: true, newUser: false, motivationPage: false })} > <p>About Gadha</p> </Dropdown.Item>
                                            <Dropdown.Item className="dropItem">
                                                <Show condition={user.loggedIn}>   <button className="dropdown-btn" onClick={user.logout}>Logout</button>   </Show>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div>
                                    <img style={{ cursor: 'pointer' }} src={img911} alt='chatIcon' onClick={user.activateChat} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12"></div>
                </div>
            </div>
            <Container fluid>
                <Container fluid>
                    <Row className=" justify-content-center">
                        <Col xs={3} md={3} xl={3} lg={3} className=" justify-content-center tahseen">
                            <Container container id="sidebar">
                                <Container className="list-group border-0 text-center text-md-left justify-content-center">
                                    <Col xs={12} md={12} xl={12} lg={12} className="list-group border-0 text-center text-md-left justify-content-center">
                                        <div class="circle-img">
                                            <img src={user.user.userPic} alt='ProfilePic' class="rounded-circle inside-logo userPicc " />
                                        </div>
                                        <a href="#" class="list-group-item d-inline-block collapsed" onClick={e => user.activePage({ homepage: true, dashboard: false, publicGoals: false, about: false, newUser: false, motivationPage: false })}><span class="d-none d-md-inline">Dashboard</span></a>
                                        <a href="#" class="list-group-item d-inline-block collapsed" onClick={e => user.activePage({ homepage: false, dashboard: false, publicGoals: false, about: false, newUser: false, motivationPage: true })}><span class="d-none d-md-inline ">911 Motivation</span></a>
                                        <a href="#" class="list-group-item d-inline-block collapsed" onClick={e => user.activePage({ homepage: false, dashboard: false, publicGoals: false, about: true, newUser: false, motivationPage: false })}><span class="d-none d-md-inline ">About Gadha</span></a>
                                        <a href="#" class="list-group-item d-inline-block collapsed b-yellow" onClick={user.logout}><span class="d-none d-md-inline ">Logout</span></a>
                                    </Col>
                                </Container>
                            </Container>
                        </Col>
                        <Col xs={9} md={9} xl={9} lg={9} className='khalil'>
                            <Container fluid className='khalil-son'>
                                <Row>
                                    <Col xs={12} md={12} xl={12} lg={12}>
                                        <Container fluid className=" justify-content-center">
                                            <ScrollAnimation animateIn='flipInY'
                                                animateOut='flipOutY'>
                                                <h4 style={{ textAlign: "center", color: "#613D61", fontSize: "1.5rem", marginTop: "5%" }}>Learn to light a candle in the darkest moments of someone’s life.<br /> Be the light that helps others see; it is what gives life its deepest significance.</h4>
                                            </ScrollAnimation>

                                            <MotivationPost />
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                            <Container fluid className='khalil-son'>
                                <Row>
                                    <Col xs={12} md={12} xl={12} lg={12}>
                                        <Container fluid className=" justify-content-center">
                                            <MotivationDiv />
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
export default MotivationPage;