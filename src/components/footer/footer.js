import React, {useContext} from "react";
import { LoginContext } from '../auth/context';
import { Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import footerLogo from '../../img/logofooter.png';
import './footer.scss';

const Footer = props => {
  let user = useContext(LoginContext);

  return (
    <>
      <Container fluid className="footer">
        <Container fluid>
          <Row>
            <Col xs={12} md={12} xl={12} lg={12} className="social-media justify-content-center text-center">
              <p>Follow us on:</p>
              <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer" className="facebook social"> <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
              <a href="https://twitter.com" target='_blank' rel="noopener noreferrer" className="twitter social"> <FontAwesomeIcon icon={faTwitter} size="2x" /> </a>
              <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer" className="instagram social"> <FontAwesomeIcon icon={faInstagram} size="2x" /> </a>
              <a href="https://www.pinterest.com" target='_blank' rel="noopener noreferrer" className="pinterest social"> <FontAwesomeIcon icon={faPinterest} size="2x" /> </a>
              <a href="https://www.youtube.com" target='_blank' rel="noopener noreferrer" className="pinterest social"> <FontAwesomeIcon icon={faYoutube} size="2x" /> </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} xl={4} lg={4} className="logoFooter">
              <img src={footerLogo} alt="" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} xl={4} lg={4} className="justify-content-center text-center">
            </Col>
            <Col xs={12} md={12} xl={4} lg={4} className="justify-content-center text-center">
              <div id="last">
                <div className="div-2">
                  <p className="info">Email: info@gadha.com <span>Phone: +962-789733851</span> </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} xl={4} lg={4} className="justify-content-center text-center">
            {/* <Link to="/about"> */}
              <a href="#" className="about" onClick={e => user.activePage({homepage:false,dashboard:false,publicGoals:false,about:true,newUser:false})} > About Gadha </a>
              {/* </Link> */}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} xl={12} lg={12} className="social-media justify-content-center text-center">
              <p className="rights">Copyright ©2020 reserved for team Gadha</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Footer;