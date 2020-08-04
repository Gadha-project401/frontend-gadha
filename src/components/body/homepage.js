import React,{ useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.scss';
import SignUp from '../auth/signup';
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
import imgCut from "../../img/img4.jpg";
import img7 from "../../img/img7.png";
import ScrollAnimation from 'react-animate-on-scroll';
// import 'animate.css/animate.min.css';


const HomePage = props => {
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <Container container className="sec1">
                <Row>
                    <Col className="zoom " xs={12} md={5} xl={5} lg={5}>
                        <h1 className="text-center">WE ARE GADHA</h1>
                        <p className="text-center" >Gadha is a very strong and meaningful word, a word hold lots of empathy and motivation in it specially if you say it in southern Jordanian language, our brand GADHA is Bold, solid and powerful.... and this is the impact we want to reach everyone of us.
                        <br />Gadha is the assistance and the mentor you need to keep going forword in every aspect of your life.</p>
                    </Col>
                    <Col xs={12} md={2} xl={2} lg={2}></Col>
                    <Col className="zoom " xs={12} md={5} xl={5} lg={5}>
                        <h1 className="text-center">WE ARE SPECIAL</h1>
                        <p className="text-center">We are the Companian of your success story... We do not tell the story for you... We do not spread your words... We are the shadow that follows and backs you up in every single step... We are here to help, motivate and tap on your shoulders when you take one step forward... </p>
                    </Col>
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
                            <img src={star} alt="" className="w3-spin" />
                            <p>We keep you on track without pushing you.. by sending you nice quotes.</p>

                            <img src={star} alt="" className="w3-spin" />
                            <p>What is nicer than looking at your own achievements and being proud.. each member will have a wall of achievements..</p>

                        </Col>
                        <Col xs={12} md={12} xl={1} lg={1}></Col>
                        <Col xs={12} md={12} xl={3} lg={3}>
                            <img src={star} alt="" className="w3-spin" />
                            <p>Providing you with a big support group of friends sharing the same goals with you.</p>

                            <img src={star} alt="" className="w3-spin" />
                            <p>We know.. we all have our ups and downs.. we created the 911 chat for you.. by one click from you..you can start chatting with anyone who's available.</p>
                            <img src={star} alt="" className="w3-spin" />
                            <p>The most important feature.. is to share honest moments.. proud small steps.. those that make real difference.. how... by writing your dairy of achievements  as notes.. and you can motivate others.. by sharing the note you wrote today from your diary to public.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container container className="sec1">
 
                <Row >
                    <Col xs={12} md={2} xl={2} lg={2}></Col>
                    <Col xs={12} md={8} xl={8} lg={8}>

                        <h1 className="text-center">Don't miss the opportunity to achieve your Goals</h1>
                  
                        <p className="text-center">Motivational speakers have had an enormous impact <br /> on my life, and millions of others, no matter what their <br />personal situation in life may be.</p>
                    </Col>
                    <Col xs={12} md={2} xl={2} lg={2}></Col>
                </Row>

                <Row className="justify-content-center">

                    <Col xs={12} md={12} xl={12} lg={12} className="justify-content-center text-center">
                    <ScrollAnimation animateIn='wobble'
                        initiallyVisible={true}>
                        <Button onClick={() => setLgShow(true)} className="rounded-pill joinBtn " variant="#EE9E6D" >
                            Join us now!
                        </Button>
                        </ScrollAnimation>
                    
                        <Modal
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            centered

                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg" className='modalTitle'>
                                    Sign Up
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <SignUp />
                            </Modal.Body>
                        </Modal>
                        {/* end of signup modal */}
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
                        <Col className="zoom" xs={12} md={12} xl={3} lg={3}>
                            <img src={in1} alt="" />
                            <div>
                                <h4>Nick Vujicic</h4>
                                <img src={Qout} alt="" className="qoute" />
                                <p>providing you with a big support group of friends sharing you the same goal</p>
                                <img src={Qout1} alt="" className="qoute" />
                            </div>
                        </Col>
                        <Col className="zoom" xs={12} md={12} xl={3} lg={3}>
                            <img src={in2} alt="" />
                            <div>
                                <h4>Robin Sharma</h4>
                                <img src={Qout} alt="" className="qoute" />
                                <p>Dreamers are mocked as impractical. The truth is they are the most practical, as their innovations lead to progress and a better way of life for all of us..</p>
                                <img src={Qout1} alt="" className="qoute" />
                            </div>
                        </Col>
                        <Col className="zoom" xs={12} md={12} xl={3} lg={3}>
                            <img src={in3} alt="" />
                            <div>
                                <h4>Les Brown</h4>
                                <img src={Qout} alt="" className="qoute" />
                                <p>When life knocks you down, try to land on your back. Because if you can look up, you can get up. Let your reason get you back up</p>
                                <img src={Qout1} alt="" className="qoute" />
                            </div>
                        </Col>
                        <Col className="zoom" xs={12} md={12} xl={3} lg={3}>
                            <img src={in4} alt="" />
                            <div>
                                <h4>Brian Tracy</h4>
                                <img src={Qout} alt="" className="qoute" />
                                <p>No one lives long enough to learn everything they need to learn starting from scratch. To be successful, we absolutely, positively have to find people who have already paid the price to learn the things that we need to learn to achieve our goals.</p>
                                <img src={Qout1} alt="" className="qoute" />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </Container>
            <Col xs={12} md={12} xl={12} lg={12} className="p-0 m-0"><img src={imgCut} className="w-100" alt="" /></Col>
            <Container fluid className="sec4">
                <Container container>
                    <Row>
                        <Col xs={12} md={12} xl={4} lg={4} className="p-0 m-0">
                            <img src={sec4Img} alt="" />
                            <h1><span>DOERS</span><br />JUST LIKE YOU! </h1>
                            <p>This is the power of our big family, those are our ambassadors, and you can easily join them.</p>
                           
                        </Col>
                        <Col xs={12} md={12} xl={8} lg={8}>

                            <div className="rating-gallery">
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <ScrollAnimation className="scrollAni" animateIn='bounceInRight'
                                   >
                                    <span >Fatema Owedah</span>
                                    </ScrollAnimation>
                                </div>

                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <ScrollAnimation className="scrollAni" animateIn='bounceInRight'
                                   >
                                    <span>Israa Othman </span>
                                    </ScrollAnimation>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <ScrollAnimation className="scrollAni" animateIn='bounceInRight'
                                  >
                                    <span>Anas Zain </span>
                                    </ScrollAnimation>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <ScrollAnimation className="scrollAni" animateIn='bounceInRight'
                                  >
                                    <span>Ammar Badwan </span>
                                    </ScrollAnimation>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <ScrollAnimation className="scrollAni" animateIn='bounceInRight'
                                  >
                                    <span>Emma Waterson </span>
                                    </ScrollAnimation>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <ScrollAnimation className="scrollAni" animateIn='bounceInRight'
                                    >
                                    <span>Robert Ethan</span>
                                    </ScrollAnimation>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <ScrollAnimation className="scrollAni" animateIn='bounceInRight'
                                    >
                                    <span>William Nilson </span>
                                    </ScrollAnimation>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <ScrollAnimation className="scrollAni" animateIn='bounceInRight'
                                   >
                                    <span>Sophia Terner </span>
                                    </ScrollAnimation>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <ScrollAnimation className="scrollAni" animateIn='bounceInRight'
                                   >
                                    <span>Raghad Alqura'an </span>
                                    </ScrollAnimation>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <ScrollAnimation className="scrollAni" animateIn='bounceInRight'
                                   >
                                    <span>Abdallah Obaid</span>
                                    </ScrollAnimation>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <ScrollAnimation className="scrollAni" animateIn='bounceInRight'
                                    >
                                    <span>Batric Owens </span>
                                    </ScrollAnimation>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <ScrollAnimation className="scrollAni" animateIn='bounceInRight'
                                   >
                                    <span>Bushra Bilal </span>
                                    </ScrollAnimation>
                                </div>
                                <div className="content">
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <img src={pStar} alt="" />
                                    <ScrollAnimation className="scrollAni" animateIn='bounceInRight'
                                   >
                                    <span>Miriam Molina </span>
                                    </ScrollAnimation>
                                </div>
                                <div className="controller">
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container container className="sec5">
                <Row>
                    <Col xs={12} md={12} xl={4} lg={4} >
                        <img src={img7} className="w-100 w3-spin" alt="" />
                    </Col>
                    <Col xs={12} md={12} xl={8} lg={8} >
                        <h1>STORIES<br />OF HAPPINESS<br />PURSUERS</h1>
                        <p className="pp">Everyone pursues happiness differently. Here are<br />some stories of amazing people who grabbed life<br />by the horns and are pursuing happiness on their<br />own terms!</p>
                        <Row>
                            <Col className="zoom" xs={12} md={12} xl={5} lg={5}>
                                <img src="https://i.pinimg.com/originals/0f/e9/20/0fe920d084739f22910442308f84b202.jpg" className="usersPic" alt="" />
                                <div>
                                    <h4>Emma Waterson</h4>
                                    <img src={Qout} alt="" className="qoute" />
                                    <p>If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles</p>
                                    <img src={Qout1} alt="" className="qoute" />
                                    
                                </div>
                            </Col>
                            <Col xs={12} md={12} xl={1} lg={1}></Col>
                            <Col className="zoom" xs={12} md={12} xl={5} lg={5}>
                                <img  className="usersPic"  src="data:image/jpeg;base64,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" alt="" />
                                <div>
                                    <h4>Robert Ethan</h4>
                                    <img src={Qout} alt="" className="qoute" />
                                    <p>You can waste your lives drawing lines. Or you can live your life crossing them</p>
                                    <img src={Qout1} alt="" className="qoute" />
                                    
                                </div>
                            </Col>
                            <Col xs={12} md={12} xl={1} lg={1}></Col>
                        </Row>
                        <Row>
                            <Col className="zoom" xs={12} md={12} xl={5} lg={5}>
                                <img  className="usersPic"  src="https://lh3.googleusercontent.com/proxy/88ICeKuLOuGtq-RA4Lgb6shSeZiffsl838IQOnNk91BYqvI_KapkuChkm6t9qupAxWGQISclpJ9jsPe8WyIw1i0vxR8G-UllenvVetp0oye5O9CvBOlJhHE" alt="" />
                                <div>
                                    <h4>William Nilson</h4>
                                    <img src={Qout} alt="" className="qoute" />
                                    <p>Unsuccessful people make their decisions based on their current situations. Successful people make their decisions based on where they want to be</p>
                                    <img src={Qout1} alt="" className="qoute" />  
                                </div>
                            </Col>
                            <Col xs={12} md={12} xl={1} lg={1}></Col>
                            <Col className="zoom" xs={12} md={12} xl={5} lg={5}>
                                <img src="https://www.highpoint.edu/media/home/Caroline-Giles-1024x646.jpg"  className="usersPic"  alt="" />
                                <div>
                                    <h4>Sophia Terner</h4>
                                    <img src={Qout} alt="" className="qoute" />
                                    <p>Never stop doing your best just because someone doesn’t give you credit</p>
                                    <img src={Qout1} alt="" className="qoute" />     
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