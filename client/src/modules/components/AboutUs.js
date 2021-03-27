import React, { useState } from "react";

const AboutUs = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-lg-8 col-xs-12 align-items-flex-start">
        <section className="page-section" id="about">
          <div className="col-lg-10 col-xs-12 ">
            <div className="d-flex mt-4">
              <h1 className="p-3 text-primary text-center"> About Us</h1>
            </div>
          </div>
          <div className="col-lg-10 col-xs-12">
            <img
              width="100%"
              alt="volks"
              src="https://res.cloudinary.com/jdm01263d/image/upload/v1616481744/volkslift_project/volks-mockup_qqjzeb.png"
            />
          </div>
          <div className="justify-content-center">
            <p className="m-4">
              VOLKSLIFT Elevator (China) Co., Ltd., founded in 2003, is a joint
              venture commonly funded by German VOLKSLIFT Group with over 80
              years of experience and Huzhou Xunda Elevator with over 30 years
              of expe- rience. Since 1935, the prior companies of German
              VOLKSLIFT and the predecessors of today’s Directors established
              the company philosophy which is based on advanced in- dustry
              technology and on German’s unique preference to perfect quality.
            </p>

            {/* With  the  deep  understanding  of  bilateral cooperation, the two partners have formed a consistent concept of elevator research, de- sign, manufacture and service. Through the development of global economic integration, German VOLKSLIFT adheres to its strat- egy and seeks for long term partners all over the world. In the cooperation, VOLKSLIFT spreads the German virtues to its partners in China and to global markets. */}
            {/* <p className="m-4">The VOLKSLIFT work force consists of 400 people, whereby 16 % have a graduate de- gree, 24% a vocational degree and 55% a high school degree. The average age is 35 years.
                The registered capital is over 30 Mio. Euro. The company covers 214,000 m2  for stan- dard  workshop  and  manufacturing  center of core parts, which will be doubled in 2015. VOLKLSIFT has a 108 m high test tower, six test shafts and a high speed elevator run- ning 7 m/s that has been successfully tested, as well as industrial leading product quality and R&D capability. It can manufacture more than  30,000  elevators  annually.  European sourced flexible sheet metal processing pro- duction line, robot automatic welding system and other advanced equipment have been in- troduced, based on substantial investments, so as to realize modern professional elevator manufacture in highly efficient production and highest quality.
                The main products include passenger eleva- tors, residential elevators, panorama eleva- tors, villa elevators, bed elevators, goods elevators, dumbwaiter lifts, escalators and moving walkways. Thanks to the outstand- ing  control  systems,  advanced  technology and consistent quality, VOLKLSIFT is rec- ognized as a leading brand and product in Europa and worldwide.
                </p> */}
                
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
