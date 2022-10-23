import React from "react";
import HeaderLogo from '../images/logo192.png';

const Navbar =(props) =>{
    return(
        <div className="navbar navbar-expand-lg bg-transparent fixed-top ">
            <div className="container-fluid ">
                    <a href="#homepage">
                        <img src={HeaderLogo} alt="image" className="nav-item border rounded p-2 "/>
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-text d-flex gap-3 mx-auto ">
                        
                        <li className="nav-item border rounded p-2 ">
                            <a className="navbar-brand text-dark " href="#homepage">Home</a>
                        </li>
                        <li className="nav-item  border rounded p-2">
                            <a className="navbar-brand text-dark" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item  border rounded p-2">
                            <a className="navbar-brand text-dark" href="#about">About</a>
                        </li>
                        <li className="nav-item  border rounded p-2">
                            <a className="navbar-brand text-dark" href="#contact">Contact</a>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default Navbar;