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
            <a target="_blank" rel="noreferrer" href="https://twitter.com/ugurdmrer">
              <li class="icon twitter">
                <span class="tooltip">Twitter</span>
                <span><i class="fab fa-twitter"></i></span>
              </li>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ugurdmrer/">
              <li class="icon instagram">
                <span class="tooltip">Instagram</span>
                <span><i class="fab fa-instagram"></i></span>
              </li>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Walreuq">
              <li class="icon github">
                <span class="tooltip">Github</span>
                <span><i class="fab fa-github"></i></span>
              </li>
              </a>
          </ul>
        </div>
        
      </div>
    )
  }
}

export default User;
