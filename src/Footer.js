import React from "react";
import { animateScroll as scroll } from "react-scroll";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';



const Footer = () => {
  return (
    <footer className="copyright">
      <div className="up" id="up" onClick={() => scroll.scrollToTop()}>
        <ArrowUpwardIcon className='i' />
      </div>
      <p>
        &copy; 2020 - Shahzaib Ekram | MERN Full Stack - Cross Platform Application
        Developer.
      </p>
    </footer>
  );
};

export default Footer;
