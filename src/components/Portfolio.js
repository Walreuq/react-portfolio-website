import React from 'react'
import PortfolioLogo from '../images/logo192.png';

const Portfolio =() => {
  return (
    <section id="portfolio" className="portfolioSection bg-warning">
        <div className="container text-center ">
            <div class="row gap-3">
                <div class="col border border-dark">
                    <a href="#">
                        <img src={PortfolioLogo} />
                    </a>
                </div>
                <div class="col border border-dark">
                    <a href="#">
                        <img src={PortfolioLogo} />
                    </a>
                </div>
                <div class="col border border-dark">
                    <a href="#">
                        <img src={PortfolioLogo} />
                    </a>
                </div>
                <div class="col border border-dark">
                    <a href="#">
                        <img src={PortfolioLogo} />
                    </a>
                </div>
                <div class="col border border-dark">
                    <a href="#">
                        <img src={PortfolioLogo} />
                    </a>
                </div>
                <div class="col border border-dark">
                    <a href="#">
                        <img src={PortfolioLogo} />
                    </a>
                </div>
                <div class="col border border-dark">
                    <a href="#">
                        <img src={PortfolioLogo} />
                    </a>
                </div>
                <div class="col border border-dark">
                    <a href="#">
                        <img src={PortfolioLogo} />
                    </a>
                </div>
                <div class="col border border-dark">
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