import React from "react";

const Navbar =(props) =>{
    return(
        <div className="container text-center">
            <ul className="row">
                <li className="col">Anasayfa</li>
                <li className="col">Portfölyo</li>
                <li className="col">Hakkımda</li>
                <li className="col">İletişim</li>
            </ul>
        </div>
    )
}

export default Navbar;