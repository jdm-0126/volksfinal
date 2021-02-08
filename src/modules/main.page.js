import React from 'react';
import { Container } from 'reactstrap';

import '../assets/styles/styles.css'
import { Navbar } from './components/Navbar/Navbar';
import { Portfolio } from './components/Portfolio';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { News } from './components/News'; 
import Footer from './components/Footer/Footer'
import QierPlayer from 'qier-player';
// import company from './videos/Company.mp4';
// import escalators from './videos/Escalators.mp4';
// import passenger from './videos/Passenger_Elevators.mp4';
import { ContactUs } from './components/Contactus';

function MainPage() {
  const company = "https://firebasestorage.googleapis.com/v0/b/volkslift-ph.appspot.com/o/Company.mp4?alt=media&token=d231ba04-3d69-417b-b7da-0a09e9f424c3";
  const escalators = "https://firebasestorage.googleapis.com/v0/b/volkslift-ph.appspot.com/o/Escalators.mp4?alt=media&token=c08d1837-d516-4eb5-be60-b322bfe3e9d1";
  const passenger = "https://firebasestorage.googleapis.com/v0/b/volkslift-ph.appspot.com/o/Passenger_Elevators.mp4?alt=media&token=6a86c0a4-8608-4157-90bf-8c7732e0f13f";
  return (
    <div className="App">
      {/* start nav */}
      <Navbar />
        
      {/* end nav */}
     <Container fluid className="p-0">
            <header className="masthead">
                <div className="container">
                    <div className="masthead-heading text-uppercase" ><h2>Welcome to VOLKSLIFT</h2></div>
                    <a className="btn btn-secondary btn-xl text-uppercase js-scroll-trigger" href="#about">Tell Me More</a>
                </div>
            </header>
     </Container>
     <Container fluid className="p-0">
     <div >
     <div className="d-flex justify-content-center">
        <div className="col-lg-8 col-xs-12">
            <section className="page-section" id="about">
              
              <div className="col-lg-4 col-xs-12 ">
                <div className="d-flex mt-4">
                  <h1 className="p-3 text-primary"> About Us</h1>
                </div>
              </div>
              <div className="col-lg-8 col-xs-12">
                <img width='100%' alt="volks" src={require('../assets/img/volks-mockup.png')} />
              </div>
            <div className="d-flex">
              <div className="align-items-center">             
                <p className="m-4">
                VOLKSLIFT  Elevator  (China)  Co.,  Ltd., founded in 2003, is a joint venture commonly funded by German VOLKSLIFT Group with over 80 years of experience and Huzhou Xunda Elevator with over 30 years of expe- rience. Since 1935, the prior companies of German VOLKSLIFT and the predecessors of today’s Directors established the company philosophy which is based on advanced in- dustry technology and on German’s unique preference to perfect quality.
With  the  deep  understanding  of  bilateral cooperation, the two partners have formed a consistent concept of elevator research, de- sign, manufacture and service. Through the development of global economic integration, German VOLKSLIFT adheres to its strat- egy and seeks for long term partners all over the world. In the cooperation, VOLKSLIFT spreads the German virtues to its partners in China and to global markets.

                </p>
                {/* <p className="m-4">The VOLKSLIFT work force consists of 400 people, whereby 16 % have a graduate de- gree, 24% a vocational degree and 55% a high school degree. The average age is 35 years.
                The registered capital is over 30 Mio. Euro. The company covers 214,000 m2  for stan- dard  workshop  and  manufacturing  center of core parts, which will be doubled in 2015. VOLKLSIFT has a 108 m high test tower, six test shafts and a high speed elevator run- ning 7 m/s that has been successfully tested, as well as industrial leading product quality and R&D capability. It can manufacture more than  30,000  elevators  annually.  European sourced flexible sheet metal processing pro- duction line, robot automatic welding system and other advanced equipment have been in- troduced, based on substantial investments, so as to realize modern professional elevator manufacture in highly efficient production and highest quality.
                The main products include passenger eleva- tors, residential elevators, panorama eleva- tors, villa elevators, bed elevators, goods elevators, dumbwaiter lifts, escalators and moving walkways. Thanks to the outstand- ing  control  systems,  advanced  technology and consistent quality, VOLKLSIFT is rec- ognized as a leading brand and product in Europa and worldwide.
                </p> */}
              </div>
              
            </div></section>
        </div>
     </div>

     <div className="container">
  <div className="row justify-content-center">
    <div className="col-auto mr-auto my-2">
    <QierPlayer 
        width={370}
        height={240}
        language="en"
        showVideoQuality={true}
        themeColor="#abc123"
        src480p={passenger}
        src720p={passenger}
        src1080p={passenger}
        src4k={passenger}
        srcOrigin={passenger}
      />
    </div>
    <div className="col-auto mr-auto my-2">
    <QierPlayer 
        width={370}
        height={240}
        language="en"
        showVideoQuality={true}
        themeColor="#abc123"
        src480p={company}
        src720p={company}
        srcOrigin={company}
      />
    </div>
    <div className="col-auto mr-auto my-2">
    <QierPlayer 
        width={370}
        height={240}
        language="en"
        showVideoQuality={true}
        themeColor="#abc123"
        src480p={escalators}
        src720p={escalators}
        srcOrigin={escalators}
      />
    </div>
  </div>
</div>
     
        
    </div>
     </Container>
     {/* <Container fluid> */}
         
         {/* <AboutUs /> */}
         <Products />
         <Portfolio />
         <News />
         <Services />
         <ContactUs />
     {/* </Container> */}
      <Footer />
    </div>
  );
}

export default MainPage;
