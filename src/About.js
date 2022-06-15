import React from 'react'
import './Aboutstyle.css'
import profPic from './Images/pic.jpg'


const About = () => {
  return (
    <div className='aboutstyle' id="section2">

      <div className="container" data-aos="fade-right">

        <div className="profpic">
          <img src={profPic} height="400px" />

        </div>
        <div className="about-heading" >
          <h1 id='section2'>About</h1>
            
          <p>
            Hello! I'm Shahzaib, a software engineer based in Karachi, Web
            Developer with 1 years of experience in designing and developing
            user interfaces, and eCommerce technologies.
            Proven ability in optimizing web functionality that improve data
            retrieval and workflow efficiencies using modern frontend. <br />
            <br /> Currently i am in 1st semester of my bachelors from SMIU
              University of Pakistan.
            </p>
            <br />
          </div>
          Here are a few technologies I've been working with recently:
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & (S)CSS3</li>
          <li>ReactJS</li>
          <li>Bootstrap</li>
          <li>Wordpress</li>
          <li>Gatsby</li>
        </div>
      </div>
  )
}
export default About;