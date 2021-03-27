import React from 'react';



const Portfolio = () => {
    return (
        <React.Fragment>
        <section className="container page-section" id="portfolio">
            <div >
                <div className="text-center">
                    <h2 className="text-primary text-center my-4">Reference Sites</h2>
                    {/* <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 my-4">
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="#regale">
                                    {/* <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div> */}
                                    <img class="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616479803/volkslift_project/regale_tr4cqc.jpg" alt="" />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Regale Residence</div>
                                    <div className="portfolio-caption-subheading text-muted">INDONESIA</div>
                                </div>
                            </div>
                        </div>
                    <div className="col-lg-4 col-sm-6 my-4 mb-sm-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#Shary">
                                {/* <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div> */}
                                <img class="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616479745/volkslift_project/ST_Andrews_International_School_Bangkok_oc56fy.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">St Andrews International School</div>
                                <div className="portfolio-caption-subheading text-muted">THAILAND</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6 my-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#alanahotel">
                                {/* <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div> */}
                                <img class="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616481151/volkslift_project/alana_hotel_m1jhx4.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">ALANA HOTEL</div>
                                <div className="portfolio-caption-subheading text-muted">INDONESIA</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 my-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#western">
                                {/* <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div> */}
                                <img class="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616481259/volkslift_project/best-western-premier_golbdr.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">BEST WESTERN HOTEL</div>
                                <div className="portfolio-caption-subheading text-muted">INDONESIA</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                {/* <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div> */}
                                <img class="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616481220/volkslift_project/pancoranchina_qthje8.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">PANCORAN CHINA TOWN </div>
                                <div className="portfolio-caption-subheading text-muted">INDONESIA</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                {/* <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div> */}
                                <img class="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616479664/volkslift_project/One_Shenzhen_hk27r0.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Zhongzhou BLDG</div>
                                <div className="portfolio-caption-subheading text-muted">Shenzhen</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    )    
}

export default Portfolio;