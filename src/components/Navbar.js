import React from "react";
import HeaderLogo from '../images/logo192.png';

const Navbar =(props) =>{
    return(
        <div className="navbar navbar-expand-lg bg-transparent sticky-top ">
            <div className="container-fluid ">
                    <a href="#homepage">
                        <img src={HeaderLogo} alt="image" className="nav-item border rounded p-2 "/>
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-text d-flex gap-3 mx-auto ">
                        <a className="navbar-brand text-dark " href="#homepage">
                            <li className="nav-item border rounded p-2 ">
                                Home
                            </li>
                        </a>
                        <a className="navbar-brand text-dark" href="#portfolio">
                            <li className="nav-item  border rounded p-2">
                                Portfolio
                            </li>
                        </a>
                        <a className="navbar-brand text-dark" href="#about">
                            <li className="nav-item  border rounded p-2">
                                About
                            </li>
                        </a>
                        <a className="navbar-brand text-dark" href="#contact">
                            <li className="nav-item  border rounded p-2">
                                Contact
                            </li>
                        </a>
                    </ul>
            </div>
        </div>
    )
}

export default Navbar;