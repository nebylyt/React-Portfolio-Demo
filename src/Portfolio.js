import React from 'react'
import webDevelop from './Images/web.jpg'
import Android from './Images/android.png'
import IOS from './Images/ios.jpg'



const Portfolio = () => {
  return (
    <section className='portfoliostyle' id='section4'>
      <div className="portfolio-heading">
        <h1>Portfolio</h1>
        <div
          className="portfolio-item"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="portfolio-img has-margin-right">
            <img src={webDevelop} height='250px' alt="" />
          </div>
          <div className="portfolio-description">
            <h6>Web Development</h6>
            <h2>Blog Website</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minus neque in laboriosam qui sunt consequatur consequuntur esse!
              Dolor, corrupti?
            </p>

          </div>
        </div>
        <div
          className="portfolio-item"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className="portfolio-description has-margin-right" style={{marginLeft: 20}}>
            <h6>Mobile Application</h6>
            <h2>Android Application</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minus neque in laboriosam qui sunt consequatur consequuntur esse!
              Dolor, corrupti?
            </p>

          </div>
          <div className="portfolio-img">
            <img src={Android} height='250' alt="" />
          </div>
        </div>
        <div
          className="portfolio-item"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="portfolio-img has-margin-right">
            <img src={IOS} height='250' alt="" />
          </div>
          <div className="portfolio-description">
            <h6>iOS Application</h6>
            <h2>Mobile Application</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minus neque in laboriosam qui sunt consequatur consequuntur esse!
              Dolor, corrupti?
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
export default Portfolio;