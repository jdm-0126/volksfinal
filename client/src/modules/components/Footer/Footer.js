import React from "react";
import { Container, Row, Col } from "reactstrap";

export const Footer = () => {
    return (
        <Container fluid className="bg-info px-0 mx-0">
          <div className="text-white ">
              <Row className="d-flex justify-content-center align-items-center">
                <Col lg={4} md={6} sm={12} xs={12} className='my-4 h-50 text-center'>
                <img width="60%" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616479462/volkslift_project/logo-Volks_-_white.png" alt="" />
                    <p className="mt-2 p-1 text-center">3rd Floor Savers Mall McArthur <br/>Hiway Balibago Angeles City</p>
                    {/* <div className="text-center">
                    
                    </div>                 */}
                </Col>
                <Col lg={2} md={6} sm={12} xs={12} className="h-50">
                  <h5 className="d-block text-white">Company</h5>
                  <a className="d-block p-2 text-white" href="#about"> About Us</a>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12} className=" h-50">
                  <h5 className="d-block text-white">Social</h5>
                  <a className="text-white" href='https://www.facebook.com/VolksliftPh'><i className="fa fa-facebook-official " aria-hidden="true"></i> Facebook</a> | <a className="text-white" href='#'><i className="fa fa-youtube text-white" aria-hidden="true"></i> Youtube </a> | 
                  <a className="text-white" href='#'><i className="fa fa-twitter " aria-hidden="true"></i> Twitter </a> | <a className="text-white" href='#'><i className="fa fa-linkedin text-white" aria-hidden="true"></i> Linkedin</a>
                </Col>
              
                <Col lg={3} md={6} sm={12} xs={12} className="h-50">
                  <h5 className="d-block text-white">Contact Us</h5>
                  <span ><i className="fa fa-phone" aria-hidden="true"></i></span> <a className="text-white" href="tel:0454099999">Telephone: (045) 409-9999 <br/></a>
                  <i className="fa fa-envelope-o" aria-hidden="true"></i><a className="text-white" href="mailto:volkslift@gmail.com"> Email: volkslift@gmail.com</a>
                </Col>
            </Row></div>
            <Container className="d-flex justify-content-center align-items-center mt-4">
            <hr />
                <Col lg={12} md={12} sm={12} xs={12} >
                <p className="text-white">Copyright © Volkslift Philippines 2020</p>
                </Col>
               
            </Container>
          
        </Container>
        
    )
    
}

export default Footer
