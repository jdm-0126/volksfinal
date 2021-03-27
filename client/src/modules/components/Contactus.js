import React, { useState }  from 'react'
import { Row, Col, Container, Button } from 'reactstrap'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
// import  { db } from '../../firebase';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

const ContactUs = () => {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  // const [dateTime, setDate] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [ modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const [ privacyModalShow, setPrivacyModalShow] = useState(false);
  // const [sendTo, setSendTo] = useState('volksliftphil@gmail.com');

  const { REACT_APP_SERVERIP } = process.env;
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  }

  const btnHandler = () => {
    setModalShow(true)
  };
  // const api = axios.create({
  //   baseURL: `${REACT_APP_SERVERIP_LOCAL}`,
  // });
  const handleShow = (e) => {
    setModalShow(true)
  }
  const handlePrivacy = (e) => {
    setPrivacyModalShow(true)
  }
  const handleSubmit = (e) => {

    // const Base = process.env.url 
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      e.preventDefault();    
    } else {
      e.preventDefault();  
      // Send a POST request
      axios({
        method: 'post',
        // url: 'api.volksliftphil.com/sendmail',
        url: 'https://volksliftapi.herokuapp.com/sendEmail',
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          message: message,
        }
      })
      .then(setShow(true))
      .then(() => window.location = '/')
      .catch(() => alert('Fill all required fields'))
      setValidated(true);
      setAgreement(true); 
   }
    setValidated(false);    
    setAgreement(false); 
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
            <Container>
                {show ? 
                  <Alert variant="success" onClose={() => setShow(false)} dismissible>
                  <Alert>Success!</Alert>
                </Alert> 
                  : "" }
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
                         <div>
                          <input className="mx-2" required type="checkbox" name="agreement" value={agreement} id="agree" onChange={checkboxHandler} />
                          <label htmlFor="agree">  I agree to <a style={{fontWeight:"bold"}} onClick={handleShow}>terms and conditions</a></label> ||
                          <label htmlFor="agree">  <a style={{fontWeight:"bold", marginLeft: "5px"}} onClick={handlePrivacy}> privacy policy</a></label>
                          <Terms
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Privacy
                            show={privacyModalShow}
                            onHide={() => setPrivacyModalShow(false)}
                          />
                        </div>

                        {/* Don't miss the exclamation mark
                        <button disabled={!agree} className="btn">
                          Continue
                        </button>* */}
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

const Privacy = (props) => {
  const privacyPolicy = [{
    id: 1,
    title: ``,
    content: `Volkslift Phil. is committed to ensuring that your privacy is protected. This Privacy Information sets out the basis on which any personal data we collect from you, or that you provide to us will be processed by us.
    `,
    content2: `Volkslift Phil. follows while processing your personal data the applicable Data Protection regulations. All data will be deleted if not needed for lawful processing any more.`
},

{
    id: 3,
    title: `1. Use of this Website`,
    content: `1. Use of this Website`,
    content2:`1.1 Volkslift Phil. is committed to protecting and respecting your privacy.`,
    content3:`1.2 Your access to and use of this Website www.Volkslift Phil..com and its contents (Website) is subject to the terms and conditions of this Privacy Policy (Privacy Policy), Volkslift Phil.'s Terms of Trade posted on this Website (Terms of Trade), any documents referred to in the Terms of Trade or otherwise on this Website and all applicable laws.`,
    content4:`1.3 By accessing and using this Website, you (User or you) accept and agree without limitation or qualification, to the terms and conditions contained in this Privacy Policy, the Terms of Trade, any other relevant documents referred to in the Terms of Trade or otherwise on this Website and all applicable laws. For the avoidance of doubt, 'using this Website' includes access to, browsing of, reviewing, posting of, transmitting, downloading, and any other means of using the Website or any material on the Website.    `
},
{
    id: 4,
    title: `2. Collection of your personal information `,
    content: `2.1 We may collect, process and hold personal information about you or others (i.e. information which may identify you in some way, such as your name, address or contact details) through this Website.`,
    content2:`2.2 This personal information may be collected from you when you register or operate our Website, purchase or enquiry about goods on the Website, make any request for further information or subscribe for other services.`,
    content3:`2.3 Providing personal information about yourself or others is voluntary, however we may not be able to provide you with access to some or all of the pages on this Website or our other products and services (including the processing of orders) if you choose not to provide us with the requested personal information.`,
    content4:`2.4 Occasionally, we may ask you for personal information about other people (for example, your family or other authorized representatives). If you give us this information, you will need to have obtained consent from the relevant people to pass their personal information onto us and to make them aware of this Privacy Policy    
    `
},
{
    id: 5,
    title: `3. Use of your personal information`,
    content: `3.1 We may use your personal information as follows:`,
    content2:`3.1.1 To provide you with Volkslift Phil. goods as ordered from the Website for business to business transactions.`,
    content3:`3.1.2 To provide you with information on Volkslift Phil. or its products or services which we feel may interest you. To optimize our services we may wish to use your personal data for direct marketing. As we respect your privacy we will only use your personal data for this purpose when you are aware thereof and if required we will request your consent prior to using your personal data for direct marketing.`,
    content4:`3.1.3 To respond to your questions and requests, to provide you with access to certain areas and features and to communicate with you about your activities on this Website.`,
    content5:`3.1.4 To ensure that content from the Website is presented in the most effective manner for you and your computer.`,
    content6:`3.1.5 To carry out our obligations arising from any contracts entered into between you and us.`,
    content7:`3.1.6 To share it with our Related Parties as required to perform functions on our behalf in connection with the Website (such as delivery of merchandise, administration of the Website or promotions or other features on it, marketing, data analysis or customer services). To do so, it may be necessary for us to transmit your personal information to outside the above Jurisdiction and you agree to this transfer.  
    `
},
{
    id: 6,
    title: `4. Disclosure of personal informations `,
    content: `4.1 We may disclose your personal information to any member of our group, including any related company of Volkslift Phil. insofar as reasonably necessary for the purposes set out in this policy.`,
    content2:`4.2 We may disclose your personal information to third parties in the following circumstances:`,
    content3:`4.2.1 In the event that we buy or sell any business or assets, we may disclose your personal information to the prospective seller or buyer of such business or assets.`,
    content4:`4.2.2 If Volkslift Phil. or substantially all of its assets are acquired by a third party, in which case personal information held by it about its customers will be one of the transferred assets.`,
    content5:`4.2.3 If we are under a duty to disclose or share your personal information in order to comply with any legal obligation, or in order to enforce or apply our Terms of Trade and other agreements, or to protect the rights, property or safety of Volkslift Phil., our customers or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.`,
    content6:`4.3 We may also use your personal information or permit selected third parties to use your personal information to provide you with information about goods and services which may be of interest to you and we or they may contact you about these goods or services.`,
    content7:`4.4 If you do not wish to be contacted by us or selected third parties with information about goods and services which may be of interest to you, please select the relevant "opt out" mechanism on the Website when providing us with your personal information.
    `
},
{
    id: 7,
    title: `5. Storage and security of your personal information `,
    content: `5.1 Volkslift Phil. controls and operates the Website from its location at Volkslift Phil. Corporate Address: Savers Mall Bldg., Mac Arthur Hi-way, Balibago, Angeles City, Philippines or from its registered address as may be informed to Securities and Exchange Commission of the Philippines (regardless of where hosting servers are located). You can contact us by telephone on +63 917 508 6647 or by email at info@Volkslift Phil..com`,
    content2:`5.2 We use certain reasonable security measures to help protect information you send to this Website. However, we cannot guarantee the security of such information. To the fullest extent permitted by law, we disclaim all liability and responsibility for any Damages you may suffer due to any loss, unauthorized access, misuse or alteration of any information you submit to this Website.`,
    content3:`Thus, by accessing this website, you agree that Volkslift Phil. shall not be liable for any Damages arising out of or in connection with the use of, reliance on, or inability to use this Website or any of the materials or information contained therein. Moreover, you agree that Volkslift Phil. shall not be liable for any inaccuracies, incompleteness, errors or any defects in the materials or information and functions provided in this Website.`
},
{
    id: 8,
    title: `6. Access to and correction of your personal information `,
    content: `6.1 If you wish to verify, correct, access or update any of your personal information collected through this Website, please contact us by using the contact information provided in clause 5.1 of this Privacy Policy.`,
    content1: `6.2 Personal data that we process for any purpose or purposes shall not be kept for longer than is necessary for that purpose or those purposes.`
},
{
    id: 9,
    title: `7. Collection of Additional information `,
    content: `7.1 Occasionally, when you connect to our Website we may collect information about your computer, including where available your IP address, operating system and browser type, for system administration and to report aggregate information to our advertisers. This is statistical data about our users' browsing actions and patterns, and does not identify any individual.`,
    content2:`7.2 For the same reason, we may obtain information about your general internet usage by using a cookie file which is stored on the hard drive of your computer. Cookies contain information that is transferred to your computer's hard drive. They help us to improve our Website and to deliver a better and more personalized service. They enable us to estimate our audience size and usage pattern, store information about your preferences and so allow us to customize our Website according to your individual needs, speed up your searches and recognize you when you return to our Website.`,
    content3:`7.3 You may refuse to accept cookies by activating the setting on your browser which allows you to refuse the setting of cookies. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you log onto our Website.
    `
},
{
    id: 10,
    title: `8. Other sites `,
    content: `8.1 This Website may, from time to time, contain links to and from the websites of our Related Parties, partner networks, advertisers and affiliates which we do not control, recommend or endorse and are not responsible for these websites or their content, products, services or privacy policies.`,
    content1:`8.2 In addition, downloading material from any of these websites may risk infringing intellectual property rights or introducing viruses into your computer system
    `
},
{
    id: 11,
    title: `9. Changes `,
    content: `9.1 Please note, we may change information on this Website and/or this Privacy Policy, at any time without notice. You should regularly review this Privacy Policy for any changes. Any changes will be effective immediately upon the posting of the revised Privacy Policy on this Website. By continuing to use the Website, you agree to any changes, and by providing continued access to the Website we are providing you consideration for agreement to such changes.
    `
},
{
    id: 12,
    title: `10. Other `,
    title2: `Jurisdiction`,
    content: `10.1 This Privacy Policy is governed by laws and regulations of the Republic of the Philippines and the parties submit to the exclusive jurisdiction of the courts, tribunals or quasi-judicial agencies of the Republic of the Philippines over any case or dispute arising from the use of this Website or the contents thereof.
    Severability
    10.2 If for any reason, any provision in this Privacy Policy is found void or unenforceable, it will be severed to the extent void or unenforceable and the remaining provisions will continue in full force and effect.
    Definitions/Interpretation
    10.3 As used herein:
    Damages means any and all direct, special, indirect, consequential or punitive loss or other damages of any kind (whether in contract, including fundamental breach, tort, including negligence, or otherwise).
    Related Parties means all of our parent, subsidiary and affiliated companies, Website Developers and other promotional partners.`
},
]
  return (
    <div>
    
      <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter" centered>
        
      <Modal.Header closeButton>
        <h3>PRIVACY INFORMATION AND COOKIES</h3>
      </Modal.Header>
      {privacyPolicy.map((terms)=> (
      <Modal.Body key={terms.id}>
       <h3>{ terms.title }</h3>
       <p>{terms.content}</p><br />
       <p>{terms.content2}</p>
       <p>{terms.content3}</p>
       <p>{terms.content4}</p>
       <p>{terms.content5}</p>
       <p>{terms.content6}</p>
       <p>{terms.content7}</p>
       </Modal.Body>
           ))}
       </Modal>
   
    </div>
  )
}

export default ContactUs;

function Terms(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <h3>Terms and Agreement</h3>
      </Modal.Header>
      <Modal.Body>
        {/* <h3>Centered Modal</h3> */}
        <p>
        These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and VOLKSLIFT (“we,” “us” or “our”), concerning your access to and use of the https://www.volksliftphil.com/ website as well as any other media form, media channel, mobile website related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Use. If you do not agree with all of these Terms of Use, then you are expressly prohibited from using the Site and you must discontinue use immediately. Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted. The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
</p>
<h3>INTELLECTUAL PROPERTY RIGHTS</h3>
<p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us and are protected by copyright and trademark laws and various other intellectual property rights, foreign jurisdictions, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission. Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content, and the Marks.</p>
<br />
<h3>USER REPRESENTATIONS</h3>
By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site; (5) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; (7) your use of the Site will not violate any applicable law or regulation. If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).

<h3>PROHIBITED ACTIVITIES</h3>
You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Site, you agree not to: Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us. Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses. Use a buying agent or purchasing agent to make purchases on the Site. Use the Site to advertise or offer to sell goods and services. Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein. Engage in unauthorized framing of or linking to the Site. Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords; Make improper use of our support services or submit false reports of abuse or misconduct. Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools. Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site. Attempt to impersonate another user or person or use the username of another user. Sell or otherwise transfer your profile. Use any information obtained from the Site in order to harass, abuse, or harm another person. Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise. Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site. Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site. Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you. Delete the copyright or other proprietary rights notice from any Content. Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code. Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site. Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”). Except as may be the result of the standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software. Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site. Use the Site in a manner inconsistent with any applicable laws or regulations.

<h3>CONTRIBUTION LICENSE</h3>
<p>By posting your Contributions to any part of the Site or making Contributions accessible to the Site by linking your account from the Site to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels. This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions. We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions. We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Site; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.
</p>
<br/>
<br/>
<h3>SUBMISSIONS</h3>
<p>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (“Submissions”) provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.
</p><br/> <br />
<h3>THIRD-PARTY WEBSITES AND CONTENT</h3>
<p>The Site may contain (or you may be sent via the Site) links to other websites (“Third-Party Websites”) as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (“Third-Party Content”). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
</p><br/><br/>

<h3>SITE MANAGEMENT</h3>
<p>We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.
</p><br /> <br />
<h3>COPYRIGHT INFRINGEMENTS</h3>
<p>We respect the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a “Notification”). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification.
</p>
<h3>TERM AND TERMINATION</h3>
<p>These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE [YOUR ACCOUNT AND] ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
</p>
<h3>MODIFICATIONS AND INTERRUPTIONS</h3>
<p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site. We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.
</p><br />
<h3>CORRECTIONS</h3>
<p>There may be information on the Site that contains typographical errors, inaccuracies, or omissions that may relate to the Site, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
</p>
<h3>DISCLAIMER</h3>
<p>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</p>

      </Modal.Body>
      <Modal.Footer>
        <Button class='btn btn-sm-info' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}