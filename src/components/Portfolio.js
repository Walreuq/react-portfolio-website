import React from 'react'
import PortfolioLogo from '../images/logo192.png';

const Portfolio =() => {
  return (
    <section id="portfolio" className="portfolioSection">
        <div class="container text-center">
            <div class="row">
                <div class="col border">
                    <a href="#">
                        <img src={PortfolioLogo} />
                    </a>
                </div>
                <div class="col border">
                    <a href="#">
                        <img src={PortfolioLogo} />
                    </a>
                </div>
                <div class="col border">
                    <a href="#">
                        <img src={PortfolioLogo} />
                    </a>
                </div>
                <div class="col border">
                    <a href="#">
                        <img src={PortfolioLogo} />
                    </a>
                </div>
                <div class="col border">
                    <a href="#">
                        <img src={PortfolioLogo} />
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Portfolio;