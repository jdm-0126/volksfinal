import React, { useState }  from 'react'
import { Row, Col, Container, Button } from 'reactstrap'
// import Section from '../../components/section-row/Section'
import Form from 'react-bootstrap/Form'
import  { db } from '../../firebase';

// function ToSend() {
//   return (
//       <Row className="contact_information">
//       <Col color={'light'} lg={4} md={10} sm={12} xs={12}>
//             <Section center color={"white"}>
//             <Col>
//             <h5>3rd Floor Savers Mall McArthur Hiway</h5>
//               <p>Balibago Angeles City</p>
//             </Col>
//           </Section>
//           </Col>
//           <Col color={'light'} lg={4} md={10} sm={12} xs={12}>
//             <Section center color={"white"}>
//             <Col>
//             <h5>0011 234 56789</h5>
//               <p>Mon-Fri 8:30am-6:30pm</p>
//             </Col>
//           </Section>
//           </Col>
//           <Col color={'light'} lg={4} md={10} sm={12} xs={12}>
//             <Section center color={"white"}>
//             <Col>
//             <h5><a href="mailto:volkslift@gmail.com"> volkslift@gmail.com</a></h5>
//             </Col>
//           </Section>
          
//         </Col>
//     </Row> 
    
//   )
// }    

export const ContactUs = () => {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [dateTime, setDate] = useState('');
  const [agreement, setAgreement] = useState(false);
  // const [sendTo, setSendTo] = useState('volksliftphil@gmail.com');


  const handleSubmit = (e) => {
    const form = e.currentTarget;
    let newDay = new Date();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      e.preventDefault();    
    } else {
      e.preventDefault();   
      db.collection('inquiries').add({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        agreement: agreement,
        // sendTo: sendTo,
      }).then(() => {
        alert('Message has been submitted');
      }).catch(error => {
        alert(error.message)
      });
      setValidated(true);
      setAgreement(true); 
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setDate(newDay)
      // setSendTo('');
    }

    setValidated(true);    
    setAgreement(true); 
  };
 
    return (
        <Container fluid className="px-0">
            <Container fluid className="bg-primary py-5 mb-5" id="contactus">
              <Container className="d-flex justify-content-center">
                <Row>
                  <Col>
                    <h1 className="font-weight-bold text-white">Contact Us</h1>
                  </Col>
                </Row>
              </Container>
            </Container>
            <Container id="section-2" className="py-5">
              <Row className="mb-5">
                <Col className="d-flex flex-column align-items-center justify-content-center">
                    <div className="main_heading">
                      <h3 className="font-weight-bold">GET IN TOUCH</h3>
                    </div>
                </Col>
              </Row>
              <Container className="w-75">
                    {/* <ToSend/> */}
                    <Container >
                <Row>
                  <Col className="d-flex flex-column align-items-center justify-content-center">
                    {/* <FormMessage addToForm={addTodo}/> */}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
                        <Form.Row>
                          <Form.Group as={Col} md="6" controlId="validationFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                               required type="text" placeholder="First name" name="firstName"  value={firstName} onChange={e => {setFirstName(e.target.value)}}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="6" controlId="validationLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control required type="text" placeholder="Last name" name="lastName" value={lastName} onChange={e => {setLastName(e.target.value)}} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group as={Col} md="6" controlId="validationEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required
                             type="email" placeholder="john@doe.com" name="email" value={email} onChange={e => {setEmail(e.target.value)}} />
                            <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="6" controlId="validationPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control required type="numbers" placeholder="Phone" name="phone"  value={phone} onChange={e => {setPhone(e.target.value)}}/>
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid number.
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="12" controlId="validationControlMessage" >
                            <Form.Control as="textarea" rows="10" placeholder="Message" name="message" value={message} onChange={e => {setMessage(e.target.value)}}/>
                            {/* <Form.Control as="textarea" rows="10" placeholder="Message" name="message"  onChange="handleInputChange"/> */}
                          </Form.Group>
                        </Form.Row>
                        <Form.Group>
                          <Form.Check
                            required name="agreement" value={agreement} label="Agree to terms and conditions" onChange={e => {setAgreement(e.target.value)}}
                            feedback="You must agree before submitting."
                          />
                        </Form.Group>
                        <Button id="addBtn" type="submit" className="btn-info">Submit</Button>
                      </Form>
                    </Col>
                </Row>
                </Container>
              </Container>
            
            </Container>
            
          </Container>
          
    )
}