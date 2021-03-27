import React from 'react';
import { Container } from 'reactstrap';

import '../assets/styles/styles.css'
import { Navbar } from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio';
import Products from './components/Products';
import { Services } from './components/Services';
import { News } from './components/News'; 
import Footer from './components/Footer/Footer'
import AboutUs from './components/AboutUs';
import Players from './components/Players';
import ContactUs from './components/Contactus';

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
            <div className="d-flex justify-content-center">
              <AboutUs />
          </div>
          <div className="d-flex justify-content-center">
              <Players />
          </div>
           <div className="d-flex justify-content-center">
              <Products />
          </div>
             
          <div className="d-flex justify-content-center">
              <Portfolio />
          </div>
          <News />
          <div className="d-flex justify-content-center">
              <Services />
          </div>
          <div className="d-flex justify-content-center">
              <ContactUs />
          </div>
          <Footer />
        </Container>
   
    
    </div>
  );
}

export default MainPage;
