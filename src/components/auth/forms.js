import React, { useState } from 'react';
import './auth.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'

import SignUp from './signup';
import Login from './login';

function Form() {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
  
    return (
      <>
        <button className="buttons" onClick={() => setSmShow(true)}>SIGN IN</button>{' '}
        <button className="buttons1" onClick={() => setLgShow(true)}>JOIN US NOW!</button>
        <Modal
          
          show={smShow}
          onHide={() => setSmShow(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm" className='modalTitle'>
            Log In
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <div className="modalBody">
            <Login/>

            </div>
          </Modal.Body>
        </Modal>
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
             
              <SignUp/>
         </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default Form ;