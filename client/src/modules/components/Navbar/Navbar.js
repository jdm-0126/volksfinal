import React from 'react'
import '../../../assets/styles/styles.css'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="https://res.cloudinary.com/jdm01263d/image/upload/v1616732566/volkslift_project/logo-Volks_old.png" alt="" /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    {/* <i className="fas fa-bars ml-1"></i> */}
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">Company</a></li> */}
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#products">Products</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Reference Sites</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>                        
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contactus">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}