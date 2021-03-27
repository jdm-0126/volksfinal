import React from 'react';

 const Products = () => {
     const Basedir = "https://res.cloudinary.com/jdm01263d/image/upload"
    return (
        <React.Fragment>
        <section className="container page-section" id="products">
            <div>
                <div className="text-center">
                    <h2 className="text-primary text-center my-4">Products</h2>
                    {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#">
                                <img className="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616481371/volkslift_project/passenger-3small_birqhz.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Passenger elevators</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#">
                                <img className="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616481428/volkslift_project/machine-room_lesssmall_xf63cq.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Machine room less elevators</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#">
                                <img className="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616481460/volkslift_project/panorama-3small.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Panorama elevators</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#">
                                <img className="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616481519/volkslift_project/bed_elevators-2_-small.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Bed Elevators</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#">
                                <img className="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616734042/volkslift_project/homelift-2_.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Home elevators</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#">
                                <img className="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616235867/volkslift_project/freight-elevators-small.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Freight elevators</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 my-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#">
                                <img className="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616481585/volkslift_project/car-elevators.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Car elevators</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 my-4 mb-sm-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#">
                                <img className="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616235417/volkslift_project/dumbwaiter-2g.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Dumb Waiter elevators</div>
                                {/* <div className="portfolio-caption-subheading text-muted">VOLKSLIFT Dumb Waiter are distinguished by their innovative design …</div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 my-4 mb-sm-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#">
                                <img className="img-fluid" src="https://res.cloudinary.com/jdm01263d/image/upload/v1616235633/volkslift_project/escalators.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Escalators</div>
                                {/* <div className="portfolio-caption-subheading text-muted">VOLKSLIFT escalators are the ideal means of transport for urban public areas …</div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    )    
}

export default Products;