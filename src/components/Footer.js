import React, { Component } from 'react'



class User extends Component {
  render() {
    return (
      <div className="footerSection bottom border border-dark bg-warning d-flex align-items-center" id="footer">
        <div className="col d-flex justify-content-center">
          <p className="">Tüm Hakları Saklıdır. &copy; Uğur Demirer</p>
        </div>
        <div className="col d-flex justify-content-center">
          <ul class="wrapper">
            <li class="icon facebook">
              <span class="tooltip">Facebook</span>
              <span><i class="fab fa-facebook-f"></i></span>
            </li>
            <li class="icon twitter">
              <span class="tooltip">Twitter</span>
              <span><i class="fab fa-twitter"></i></span>
            </li>
            <li class="icon instagram">
              <span class="tooltip">Instagram</span>
              <span><i class="fab fa-instagram"></i></span>
            </li>
            <li class="icon github">
              <span class="tooltip">Github</span>
              <span><i class="fab fa-github"></i></span>
            </li>
            <li class="icon youtube">
              <span class="tooltip">Youtube</span>
              <span><i class="fab fa-youtube"></i></span>
            </li>
          </ul>
        </div>
        
      </div>
    )
  }
}

export default User;
