import React, {Component, useState} from 'react'
// import { link } from 'react-scroll'

const textData = [
  {
    id: 1,
    text: "home",
    hreftext: "#section1"
  },
  {
    id: 2,
    text: "about",
    hreftext: "#section2"
  },{
    id: 3,
    text: "Service",
    hreftext: "#section3"
  },{
    id: 4,
    text: "Portfolia",
    hreftext: "#section4"
  },{
    id: 5,
    text: "Contact",
    hreftext: "#section5"
  },
];

const activeStyle = {
  color: 'white',
  borderBottom: "1px solid"
};

const Navbar = () => {
  const [activeId, setActiveId] = useState(1,1);
  const handleClick = (id)=> ()=> {
    const activeElement = textData.find((item)=> item.id === id )
    activeElement && setActiveId(id)
  }
  
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark"
      style={{position: "fixed",zIndex:999, justifyContent: "space-between",left: 400}}>
        
        <a className="navbar-brand" href="#"></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav ml-auto">
            {textData.map(({ id, text, hreftext}) => {
              return (
                <li className='nav-item'
                  key={id}
                  style={id === activeId ? activeStyle : {}}
                  onClick={handleClick(id)}
                >
                  <a className="nav-link" href={hreftext}>{text}</a>
                </li>
              );
            })}
          </ul>

        </div>
      </nav>

    </header>

  )
}


export default Navbar;