import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PrivacyPolicy from "../privacy.data";




export const Footer = () => {
  const [ modalShow, setModalShow] = useState(false);
  const [ privacyModalShow, setPrivacyModalShow] = useState(false);

    return (
        <Container fluid className="bg-info px-0 mx-0">
          <Container fluid className="bg-info text-white px-2">
              <Row className="justify-content-center pt-2">
                <Col lg={4} md={6} sm={12} xs={12} className='my-5 h-25 text-center'>
                    <img width="60%" src={require("../../../assets/img/logo-Volks - white.png")} alt="logo"/>
                    <p className="mt-2 p-1 text-center">3rd Floor Savers Mall McArthur <br/>Hiway Balibago Angeles City</p>
                    {/* <div className="text-center">
                    
                    </div>                 */}
                </Col>
                <Col lg={2} md={6} sm={12} xs={12} className="my-5 h-50">
                  <h5 className="d-block">Company</h5>
                  <a className="d-block p-2 text-white" href="#about"> About Us</a>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12} className="mt-5 h-50">
                  <h5 className="mb-4">Social</h5>
                  <a href='#'><i className="fa fa-facebook-official text-white" aria-hidden="true"></i> </a> | <a href='#'><i className="fa fa-youtube text-white" aria-hidden="true"></i>  </a> | 
                  <a href='#'><i className="fa fa-twitter text-white" aria-hidden="true"></i>  </a> | <a href='#'><i className="fa fa-linkedin text-white" aria-hidden="true"></i> </a>
                </Col>
              
                <Col lg={3} md={6} sm={12} xs={12} className="mt-5 h-50">
                  <h5 className="mb-4">Contact Us</h5>
                  <span className="text-white"><i className="fa fa-phone" aria-hidden="true"></i></span> <a href="tel:0454099999">Telephone: (045) 409-9999 <br/></a>
                  <i className="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:volkslift@gmail.com"> Email: volkslift@gmail.com</a>
                </Col>
            </Row>
            <Row className="justify-content-center w-100">
            <hr className="mt-5" />
                <Col lg={12} xs={12}>
                <p>Copyright © Volkslift Philippines 2020</p>
                </Col>
                {/* <Col lg={6} md={6} sm={12} xs={12} className="d-flex justify-content-center">
                <a class='mx-4' onClick={() => setPrivacyModalShow(true)}> Privacy Policy </a>  |  <a class='mx-4' onClick={() => setModalShow(true)}>
                  Terms and Agreement
                </a>
                </Col>
                 <Terms
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <Privacy
                  show={privacyModalShow}
                  onHide={() => setPrivacyModalShow(false)}
                />  */}
                
                  {/* <h5>PRIVACY INFORMATION AND COOKIES</h5> */}
                  {/* {PrivacyPolicy.map((terms, index) => (
                    <privacy index={index} terms={terms} key={index} />
                  ))} 
                  {PrivacyPolicy.map((terms, index) => (
                    <Privacy index={index} terms={terms} key={index} show={privacyModalShow}
                    onHide={() => setPrivacyModalShow(false)}/>
                  ))} */}
            </Row>
          </Container>
        </Container>
        
    )
    
}

export default Footer
