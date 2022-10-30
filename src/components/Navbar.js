import React from "react";
import HeaderLogo from '../images/logo192.png';

const Navbar =(props) =>{
    return(
        <div className="navbar navbar-expand-lg bg-light sticky-top ">
            <div className="container-fluid ">
                    <a href="#homepage">
                        <img src={HeaderLogo} alt="image" className="nav-item border rounded p-2 "/>
                    </a>
                    <ul  className="navbar-nav me-auto mb-2 mb-lg-0 navbar-text d-flex gap-3 mx-auto ">
                        <a className="navbar-brand " href="#homepage">
                            <li aria-hidden className="nav-item cybr-btn">
                                <span aria-hidden>Home</span>
                                <span aria-hidden className="cybr-btn__glitch">Home</span>
                                <span aria-hidden class="cybr-btn__tag">W34</span>
                            </li>
                        </a>
                        <a className="navbar-brand " href="#portfolio">
                            <li aria-hidden className="nav-item cybr-btn">
                                <span aria-hidden>Portfolio</span>
                                <span aria-hidden className="cybr-btn__glitch">Portfolio</span>
                                <span aria-hidden class="cybr-btn__tag">W34</span>
                            </li>
                            
                        </a>
                        <a className="navbar-brand " href="#about">
                            <li aria-hidden className="nav-item cybr-btn">
                                <span aria-hidden>About</span>
                                <span aria-hidden class="cybr-btn__glitch">About</span>
                                <span aria-hidden class="cybr-btn__tag">W34</span>
                            </li>
                            
                        </a>
                        <a className="navbar-brand " href="#contact">
                            <li aria-hidden className="nav-item cybr-btn">
                                <span aria-hidden>Contact</span>
                                <span aria-hidden className="nav-item  cybr-btn__glitch">Contact</span>
                                <span aria-hidden class="cybr-btn__tag">W34</span>
                            </li>
                        </a>
                    </ul>
            </div>
        </div>
    )
}

export default Navbar;