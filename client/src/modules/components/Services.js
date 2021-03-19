import React from 'react';

export const Services = () => {
    return (
        <React.Fragment>
        <section class="page-section" id="services">
            <div class="container">
                <div class="">
                    <h2 class="text-primary text-left my-5 ">Volkslift Operating Standard</h2>
                    <span class="heading-line" style={{backgroundColor: '#ceb40a'}}></span>
                    {/* <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                </div>
                <div class="row text-center"> 
                    <div class="col-md-4 my-4">
                        <span class="fa-stack fa-2x">
                            <i className="fa fa-history fa-stack-2x text-info" aria-hidden="true"></i>
                        </span>
                        <h3 class="my-3 text-dark"><small>Responsiveness</small></h3>
                        <p class="text-muted">Rapid response and ready resolution supported by our in-house 24/7 contact centre and emergency call service for lift maintenance and rescue island wide for companies and households in Philippines.</p>
                    </div>
                    <div class="col-md-4 my-4">
                        <span class="fa-stack fa-2x">
                            <i className="fa fa-plus-square fa-stack-2x text-info" aria-hidden="true"></i>
                        </span>
                        <h3 class="my-3 text-dark"><small>Safety</small></h3>
                        <p class="text-muted">Optimum standards of safe operation and safety performance benchmarked against official requirements and backed by safety corporate values.</p>
                    </div>
                    <div class="col-md-4 my-4">
                        <span class="fa-stack fa-2x">
                            <i className="fa fa-cogs fa-stack-2x text-info" aria-hidden="true"></i>
                        </span>
                        <h3 class="my-3 text-dark"><small>Performance</small></h3>
                        <p class="text-muted">Peak-performing smooth operation and system leveraging our extensive onsite technical knowledge, experience and expertise.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-2x">
                            <i className="fa fa-upload fa-stack-2x text-info" aria-hidden="true"></i>
                        </span>
                        <h3 class="my-3 text-dark"><small>Reliability</small></h3>
                        <p class="text-muted">Proper accountable lift maintenance control leading to a consistent working of the elevators and escalators, minimizing potential vulnerabilities and costs in Singapore.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-2x">
                            <i className="fa fa-history fa-stack-2x text-info" aria-hidden="true"></i>
                        </span>
                        <h3 class="my-3 text-dark"><small>Availability</small></h3>
                        <p class="text-muted">High uninterrupted service availability reached with possibly low breakdown rate, reduced callback rate and minimal downtime.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-2x">
                            <i className="fa fa-pencil fa-stack-2x text-info" aria-hidden="true"></i>
                        </span>
                        <h3 class="my-3 text-dark" ><small>Assurance</small></h3>
                        <p class="text-muted">Complete care and ownership in overseeing the end-to-end needs of your vertical transportation, easing your burden of managing its asset, performance and costs.</p>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    )
}