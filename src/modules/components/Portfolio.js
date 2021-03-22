import React from 'react';



export const Portfolio = () => {
    return (
        <React.Fragment>
        <section class="page-section bg-light" id="reference">
            <div class="container">
                <div class="text-center">
                    <h2 class="text-primary text-left my-4">Reference Sites</h2>
                    {/* <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 my-4">
                            <div class="portfolio-item">
                                <a class="portfolio-link" data-toggle="modal" href="#regale">
                                    {/* <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div> */}
                                    <img class="img-fluid" src={require('../../assets/img/regale.jpg')} alt="" />
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Regale Residence</div>
                                    <div class="portfolio-caption-subheading text-muted">INDONESIA</div>
                                </div>
                            </div>
                        </div>
                    <div class="col-lg-4 col-sm-6 my-4 mb-sm-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#Shary">
                                {/* <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div> */}
                                <img class="img-fluid" src={require('../../assets/img/ST_Andrews_International_School_Bangkok.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">St Andrews International School</div>
                                <div class="portfolio-caption-subheading text-muted">THAILAND</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-sm-6 my-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#alanahotel">
                                {/* <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div> */}
                                <img class="img-fluid" src={require('../../assets/img/alana hotel.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">ALANA HOTEL</div>
                                <div class="portfolio-caption-subheading text-muted">INDONESIA</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 my-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#western">
                                {/* <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div> */}
                                <img class="img-fluid" src={require('../../assets/img/best-western-premier.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">BEST WESTERN HOTEL</div>
                                <div class="portfolio-caption-subheading text-muted">INDONESIA</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                {/* <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div> */}
                                <img class="img-fluid" src={require('../../assets/img/pancoranchina.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">PANCORAN CHINA TOWN </div>
                                <div class="portfolio-caption-subheading text-muted">INDONESIA</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                {/* <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div> */}
                                <img class="img-fluid" src={require('../../assets/img/One_Shenzhen.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Zhongzhou BLDG</div>
                                <div class="portfolio-caption-subheading text-muted">Shenzhen</div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-lg-4 col-sm-6">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={require('../../assets/img/volsBuilding.jpg')} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Darwaza_City</div>
                                <div class="portfolio-caption-subheading text-muted">IRAW</div>
                            </div>
                        </div>
                    </div>/}
                    {/* 3rd row of products *
                    
                    {/* <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/05-thumbnail.jpg" alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Dumbwaiter elevators</div>
                                <div class="portfolio-caption-subheading text-muted">Website Design</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/06-thumbnail.jpg" alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Escalators</div>
                                <div class="portfolio-caption-subheading text-muted">Photography</div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        </React.Fragment>
    )    
}