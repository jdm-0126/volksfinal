import React, { useState } from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import { AiTwotoneAppstore, phone } from 'react-icons/ai';
import { FaPhone, FaMapMarker, FaMapMarkerAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { items } from './constants/items.data';
import styled from 'styled-components';

// const NavContainer = styled.div`
//   position: ${props => props.absoluteHeader ? 'absolute' : 'relative'};
//   width: 100%;
// `;

const Navbar = ({ absoluteHeader }) => {
//   const [fadeIn, setFadeIn] = useState(false);

  // const toggle = () => setFadeIn(!fadeIn);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
  );
};

export default Navbar;
