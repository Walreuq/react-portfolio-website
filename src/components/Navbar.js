import React from "react";

const Navbar =(props) =>{
    return(
        <div className="navbar navbar-expand-lg bg-dark fixed-top ">
            <div className="container-fluid ">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-text d-flex gap-3 mx-auto ">
                        <li className="nav-item border rounded p-2 ">
                            <a className="navbar-brand text-light " href="#">Home</a>
                        </li>
                        <li className="nav-item  border rounded p-2">
                            <a className="navbar-brand text-light" href="#">Portfolio</a>
                        </li>
                        <li class="nav-item  border rounded p-2">
                            <a className="navbar-brand text-light" href="#">About</a>
                        </li>
                        <li class="nav-item  border rounded p-2">
                            <a className="navbar-brand text-light" href="#">Contact</a>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default Navbar;