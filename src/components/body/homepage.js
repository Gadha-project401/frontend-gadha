import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.scss';
import Sec1img from "../../img/img1.png";
import star from "../../img/star.png";
import in1 from "../../img/in1.jpg";
import in2 from "../../img/in2.jpg";
import in3 from "../../img/in3.jpg";
import in4 from "../../img/in4.jpg";
import Qout from "../../img/quotation.png";
import Qout1 from "../../img/quotation-mark.png";
import pStar from "../../img/p-star.png";
import sec4Img from "../../img/img6.png";
import next from "../../img/next.png";
import prev from "../../img/prev.png";
import imgCut from "../../img/img4.jpg";
import img7 from "../../img/img7.png";


const HomePage = props => {

    return (
        <>
            <Container container className="sec1">
                <Row>
                    <Col xs={12} md={1} xl={1} lg={1}></Col>
                    <Col xs={12} md={4} xl={4} lg={4}>
                        <h1 className="text-center">WE ARE GADHA</h1>
                        <p className="text-center">Gadha is a very strong and mainingful word a word hold lots of empathy and motivation in it specially if you say it in southern Jordanian language, our brand GADHA is Bold, solid and powerful.... and this is the impact we want to reach every one of us.
                        <br />Gadha is the assistance and the mentor you need to keep going forword in every aspect of your life.</p>
                    </Col>
                    <Col xs={12} md={2} xl={2} lg={2}></Col>
                    <Col xs={12} md={4} xl={4} lg={4}>
                        <h1 className="text-center">WE ARE SPECIAL</h1>
                        <p className="text-center">is we are the Companian of your success story...to we do not tell the story for you... we do not spread toyr word for you... we are the shadow follows and back you up at every single step... we are here to help, motivate and tap on ypue sholders when you take one step forward... </p>
                    </Col>
                    <Col xs={12} md={1} xl={1} lg={1}></Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md={12} xl={12} lg={12} className="justify-content-center text-center">
                        <img src={Sec1img} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="sec2">
                <Container container>
                    <Row>
                        <Col xs={12} md={12} xl={3} lg={3}>
                            <h1>HOW TO ACHIEVE YOUR AND OUR GOALS </h1>
                        </Col>
                        <Col xs={12} md={12} xl={1} lg={1}></Col>
                        <Col xs={12} md={12} xl={3} lg={3}>
                            <img src={star} alt="" />
                            <p>keep you on track without pushing you.. by sending you nice quotes.. intrested videos how to videos regularly</p>

                            <img src={star} alt="" />
                            <p>and what is nicer than to look at your own proud and achievements.. each member will have a wall of acheivments..</p>

                        </Col>
                        <Col xs={12} md={12} xl={1} lg={1}></Col>
                        <Col xs={12} md={12} xl={3} lg={3}>
                            <img src={star} alt="" />
                            <p>providing you with a big support group of friends sharing you the same goal</p>

                            <img src={star} alt="" />
                            <p>we know.. we all have our ups and downs.. we create a 911 chat for you.. by a one click from you.. red buzzers buzz at your friends dashboards.. calling them to help you immediately..</p>
                            <img src={star} alt="" />
                            <p>the most important feature.. is to share honost moments.. proud small steps.. those that make real different.. how... by writing your dairy of achievent  as notes.. and you can motivate others.. by share the note your wrote today from your diary to public</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container container className="sec1">
                <Row >
                    <Col xs={12} md={2} xl={2} lg={2}></Col>
                    <Col xs={12} md={8} xl={8} lg={8}>
                        <h1 className="text-center">Don't miss the oppertunity to achive your Goals</h1>
                        <p className="text-center">Motivational speakers have had an enormous impact <br /> on my life, and millions of others, no matter what their <br />personal situation in life may be.</p>
                    </Col>
                    <Col xs={12} md={2} xl={2} lg={2}></Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md={12} xl={12} lg={12} className="justify-content-center text-center">
                        <Button className="rounded-pill" variant="#EE9E6D" >
                            Join us now!
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="sec3">
                <Container container>
                    <Row>
                        <Col xs={12} md={12} xl={12} lg={12}>
                            <h1>GET INSPIRED </h1>
                            <p>Motivational speakers have had an enormous impact on my life, and millions of others,<br /> no matter what their personal situation in life may be.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} xl={3} lg={3}>
                            <img src={in1} alt="" />
                            <div>
                                <img src={Qout} alt="" className="qoute" />
                                <p>providing you with a big support group of friends sharing you the same goal</p>
                                <img src={Qout1} alt="" className="qoute" />
                                <h4>Nick Vujicic</h4>
                            </div>
                        </Col>
                        <Col xs={12} md={12} xl={3} lg={3}>
                            <img src={in2} alt="" />
                            <div>
                                <img src={Qout} alt="" className="qoute" />
                                <p>Dreamers are mocked as impractical. The truth is they are the most practical, as their innovations lead to progress and a better way of life for all of us..</p>
                                <img src={Qout1} alt="" className="qoute" />
                                <h4>Robin Sharma</h4>
                            </div>
                        </Col>
                        <Col xs={12} md={12} xl={3} lg={3}>
                            <img src={in3} alt="" />
                            <div>
                                <img src={Qout} alt="" className="qoute" />
                                <p>When life knocks you down, try to land on your back. Because if you can look up, you can get up. Let your reason get you back up</p>
                                <img src={Qout1} alt="" className="qoute" />
                                <h4>Les Brown</h4>
                            </div>
                        </Col>
                        <Col xs={12} md={12} xl={3} lg={3}>
                            <img src={in4} alt="" />
                            <div>
                                <img src={Qout} alt="" className="qoute" />
                                <p>No one lives long enough to learn everything they need to learn starting from scratch. To be successful, we absolutely, positively have to find people who have already paid the price to learn the things that we need to learn to achieve our goals.</p>
                                <img src={Qout1} alt="" className="qoute" />
                                <h4>Brian Tracy</h4>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </Container>
            <Col xs={12} md={12} xl={12} lg={12} className="p-0 m-0"><img src={imgCut} className="w-100"  alt=""/></Col>
            <Container fluid className="sec4">
                <Container container>
                    <Row>
                        <Col xs={12} md={12} xl={4} lg={4} className="p-0 m-0">
                            <img src={sec4Img} alt="" />
                            <h1><span>DOERS</span><br />JUST LIKE YOU! </h1>
                            <p>these are the power of our biy family, those are our embasoders, and you can easily join them.</p>
                        </Col>
                        <Col xs={12} md={12} xl={8} lg={8}>
                            <div className="rating-gallery">
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <span>FATEMA AL-.ZAHRAA OWEDAH </span>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <span>Israa Othman </span>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <span>Anas Zain </span>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <span>Ammar Badwan </span>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <span>FATEMA AL-.ZAHRAA OWEDAH </span>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <span>Israa Othman</span>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <span>Anas Zain </span>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <span>Ammar Badwan </span>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <span>FATEMA AL-.ZAHRAA OWEDAH </span>
                                </div>
                                <div className="content">
                                    <img src={pStar} />
                                    <img src={pStar} />
                                    <img src={pStar} />
                                    <span>Israa Othman</span>
                                </div>
                                <div className="content">
                                    <img src={pStar} />
                                    <img src={pStar} />
                                    <img src={pStar} />
                                    <span>Anas Zain </span>
                                </div>
                                <div className="content">
                                    <img src={pStar} />
                                    <img src={pStar} />
                                    <img src={pStar} />
                                    <span>Ammar Badwan </span>
                                </div>
                                <div className="content">
                                    <img src={pStar} />
                                    <img src={pStar} />
                                    <img src={pStar} />
                                    <span>FATEMA AL-.ZAHRAA OWEDAH </span>
                                </div>
                                <div className="controller">
                                    <a href="#" ><img src={next} /></a>
                                    <a href="#" ><img src={prev} /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container container className="sec5">
                <Row>
                    <Col xs={12} md={12} xl={4} lg={4} >
                        <img src={img7} className="w-100" />
                    </Col>
                    <Col xs={12} md={12} xl={8} lg={8} >
                        <h1>STORIES<br />OF HAPPINESS<br />PURSUERS</h1>
                        <p className="pp">Everyone pursues happiness differently. Here are<br />some stories of amazing people who grabbed life<br />by the horns and are pursuing happiness on their<br />own terms!</p>
                        <Row>
                            <Col xs={12} md={12} xl={5} lg={5}>
                                <img src={in3} alt="" />
                                <div>
                                    <img src={Qout} alt="" className="qoute" />
                                    <p>When life knocks you down, try to land on your back. Because if you can look up, you can get up. Let your reason get you back up</p>
                                    <img src={Qout1} alt="" className="qoute" />
                                    <h4>Les Brown</h4>
                                </div>
                            </Col>
                            <Col xs={12} md={12} xl={1} lg={1}></Col>
                            <Col xs={12} md={12} xl={5} lg={5}>
                                <img src={in4} alt="" />
                                <div>
                                    <img src={Qout} alt="" className="qoute" />
                                    <p>No one lives long enough to learn everything they need to learn starting from scratch. To be successful, we absolutely, positively have to find people who have already paid the price to learn the things that we need to learn to achieve our goals.</p>
                                    <img src={Qout1} alt="" className="qoute" />
                                    <h4>Brian Tracy</h4>
                                </div>
                            </Col>
                            <Col xs={12} md={12} xl={1} lg={1}></Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} xl={5} lg={5}>
                                <img src={in2} alt="" />
                                <div>
                                    <img src={Qout} alt="" className="qoute" />
                                    <p>Dreamers are mocked as impractical. The truth is they are the most practical, as their innovations lead to progress and a better way of life for all of us..</p>
                                    <img src={Qout1} alt="" className="qoute" />
                                    <h4>Robin Sharma</h4>
                                </div>
                            </Col>
                            <Col xs={12} md={12} xl={1} lg={1}></Col>
                            <Col xs={12} md={12} xl={5} lg={5}>
                                <img src={in1} alt="" />
                                <div>
                                    <img src={Qout} alt="" className="qoute" />
                                    <p>providing you with a big support group of friends sharing you the same goal</p>
                                    <img src={Qout1} alt="" className="qoute" />
                                    <h4>Nick Vujicic</h4>
                                </div>
                            </Col>
                            <Col xs={12} md={12} xl={1} lg={1}></Col>
                        </Row>

                    </Col>
                </Row>
            </Container>


        </>

    )
}

export default HomePage;