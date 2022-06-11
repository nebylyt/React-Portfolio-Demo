import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import WebIcon from '@material-ui/icons/Web';
import AndroidIcon from '@material-ui/icons/Android';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// import { colors } from '@material-ui/core';

let iconStyles = {
  fontSize: '75px',
  
};

const Service = () => {
  return (
    <div className='servicestyle' id='section3'>


      <div className="container Service">
        <div className="service-heading">
          <h1>Services</h1>
          <h6>What i can do for you</h6>
        </div>
        <div className="my-skills">
          <div className="skill" data-aos="fade-in" data-aos-delay="200">
            <div className="icon-container">
              <WebIcon style={iconStyles} />
            </div>
            <h3>Web Development</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores quidem soluta provident sequi fugit aliquid voluptate
              animi suscipit earum similique.
            </p>
          </div>
          <div className="skill" data-aos="fade-in" data-aos-delay="300">
            <div className="icon-container">
            <AndroidIcon style={iconStyles} />
            </div>
            <h3>Android Applications</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores quidem soluta provident sequi fugit aliquid voluptate
              animi suscipit earum similique.
            </p>
          </div>
          <div className="skill" data-aos="fade-in" data-aos-delay="400">
            <div className="icon-container">
              <PhoneIphoneIcon style={iconStyles} />
            </div>
            <h3>iOS Applications</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores quidem soluta provident sequi fugit aliquid voluptate
              animi suscipit earum similique.
            </p>
          </div>
        </div>
      </div>

    </div>


  )
}
export default Service;