import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram, faPinterest, faYoutube} from '@fortawesome/free-brands-svg-icons';

import './footer.scss';

const Footer = props =>{

  return(
    <>
    <footer>
<div className="social-media">
       <p>Follow us on:</p>
       <a href="https://www.facebook.com" className="facebook social"> <FontAwesomeIcon icon={faFacebook} size="2x"/></a>
       <a href="https://twitter.com" className="twitter social"> <FontAwesomeIcon icon={faTwitter} size="2x"/> </a>
       <a href="https://www.instagram.com" className="instagram social"> <FontAwesomeIcon icon={faInstagram} size="2x"/> </a>
       <a href="https://www.pinterest.com" className="pinterest social"> <FontAwesomeIcon icon={faPinterest} size="2x"/> </a>
       <a href="https://www.youtube.com" className="pinterest social"> <FontAwesomeIcon icon={faYoutube} size="2x"/> </a>
    </div>

    <div className="div-about">
      <a href="https://deploy-preview-11--gadha.netlify.app" className="about"> About Gadha </a>
       </div>
       
    <div id="last">
      <div className="div-2">

        
         <p className="info">Email: info@gadha.com <span>Phone: +962-789733851</span> </p>
      </div>
      <p className="rights">Copyright ©2020 reserved for team Gadha</p>
    </div>
    
    </footer>
    </>
  )
}

export default Footer;