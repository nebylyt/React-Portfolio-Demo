import React from 'react';
import './App.css';
import Particles from 'react-particles-js'
import {makeStyles} from "@material-ui/core"
import Home from './Home';
import About from './About';
import Service from './Service'
import Portfolio from './Portfolio';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';

const useStyles = makeStyles({
  particlesCanva: {
      position: "fixed",
      right: 0,
      bottom: 0
  }
})

function App() {
  const classes = useStyles()
  return (
    <>
      <Navbar />
      <div className='all'>
        <>
          <Particles 
          canvasClassName={classes.particlesCanva}
          params={{
              particles: {
                  number:{
                      value: 80,
                      density: {
                          enable: true,
                          value_area: 850
                      }
                  },

                  shape: {
                      type: "circle",
                      stroke: {
                          width: 1
                      }
                  },

                  size:{
                      value: 5,
                      random: true,
                      anim: {
                          enable: true,
                          speed: 10,
                          size_min: 0.1,
                          sync: true
                      }
                  }
              }
          }}/>

        </>
        <Home />
        <About />
        <Service />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      
    </>
  );
}

export default App;
