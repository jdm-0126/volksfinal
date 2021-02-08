import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col, Container } from 'reactstrap'
import { PrivacyPolicy } from './privacy.data'

  
  // function privacy({terms, index, props}) {
  //   return (
        
  //   )
  // }

  export const PrivacyModal = () => {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <div style={{ color: "yellow" }}>
        <privacy show={modalShow} onHide={() => setModalShow(false)} />
        <h5>PRIVACY INFORMATION AND COOKIES</h5>
        {PrivacyPolicy.map((terms, index) => (
          // <privacy index={index} terms={terms} key={index} />
          <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            PRIVACY INFORMATION AND COOKIES
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
      
          <h6 className="font-weight-bold">{ terms.title }</h6>
          <h6 className="font-weight-bold">{ terms.title2 }</h6>
          <p className="text-primary">{terms.content}</p><br />
          <p className="text-primary">{terms.content2}</p><br />
          <p className="text-primary">{terms.content3}</p><br />
          <p className="text-primary">{terms.content4}</p><br />
          <p className="text-primary">{terms.content5}</p><br />
          <p className="text-primary">{terms.content6}</p><br />
          <p className="text-primary">{terms.content7}</p><br /> 
          </Modal.Body>
          </Modal>
        ))}
      </div>
    );
  }
  
  export default PrivacyModal