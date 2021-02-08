import React from 'react';



export const Products = () => {
    return (
        <React.Fragment>
        <section class="page-section bg-light" id="products">
            <div class="container">
                <div class="text-center">
                    <h2 class="text-primary text-left my-4">Products</h2>
                    {/* <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#">
                                <img class="img-fluid" src={require('../../assets/img/passenger-3small.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Passenger elevators</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#">
                                <img class="img-fluid" src={require('../../assets/img/machine-room lesssmall.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Machine room less elevators</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#">
                                <img class="img-fluid" src={require('../../assets/img/panorama-3small.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Panorama elevators</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#">
                                <img class="img-fluid" src={require('../../assets/img/bed elevators-2 -small.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Bed Elevators</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#">
                                <img class="img-fluid" src={require('../../assets/img/homelift-2.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Home elevators</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#">
                                <img class="img-fluid" src={require('../../assets/img/freight-elevators-small.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Freight elevators</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#">
                                <img class="img-fluid" src={require('../../assets/img/car-elevators.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Car elevators</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 my-4 mb-sm-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#">
                                <img class="img-fluid" src={require('../../assets/img/dumbwaiter-2.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Dumb Waiter elevators</div>
                                <div class="portfolio-caption-subheading text-muted">VOLKSLIFT Dumb Waiter are distinguished by their innovative design …</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 my-4 mb-sm-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#">
                                <img class="img-fluid" src={require('../../assets/img/escalators.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Escalators</div>
                                <div class="portfolio-caption-subheading text-muted">VOLKSLIFT escalators are the ideal means of transport for urban public areas …</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    )    
}