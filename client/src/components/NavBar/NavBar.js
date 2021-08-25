import React from 'react'
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../images/logo.png'
import './Navbar.css'

function Navbar() {
     


    return (
        <div className="Header_section">
        <div className="Header_left">
              <Link to="/">
              <img src={Logo} alt="" />
              </Link>
        </div>
        <div className="Header_right">
             <div className="dropdown">
                   <h5 className="Header_right_heading_dropdown_mobile">MORE <ArrowDropDownIcon /></h5>
                   <div className="Header_dropdown_more">
                        {/* dropdown for more will be created */}
                        <a className="anchortag" href="#services">SERVICES</a>
                        <a className="anchortag" href="#event">EVENTS</a>
                        <a className="anchortag" href="#care">CARE</a>
                        <a className="anchortag" href="#consult">CONSULT</a>
                   </div>
             </div>


             <div className="dropdown">
                   <p className="Header_right_heading_dropdown">SERVICES <ArrowDropDownIcon /></p>
                   <div className="Header_dropdown_services">
                        {/* dropdown for services will be created */}
                
                        <a className="anchortag" href="./gym">GYM </a>
                        
                        <a className="anchortag" href="./yoga">YOGA</a>
                        <a className="anchortag" href="./dance">DANCE</a>
                        <a className="anchortag" href="./karate">KARATE</a>
                        <a className="anchortag" href="./trekking">TREKKING</a>
                   </div>
             </div>
          
             <p className="Header_right_heading"><a className="anchortag" href="#event">EVENTS</a></p>
             <p className="Header_right_heading"><a className="anchortag" href="#care">CARE</a></p>
             <p className="Header_right_heading"><a className="anchortag" href="#consult">CONSULT</a></p>
              <Link to="/login">  
             <Button>LOGIN</Button>
             </Link>   

             <Link to="/register">
             <Button className="button_design">SIGNUP</Button>
             </Link>
             <SearchIcon className="searchButton"/>
        </div>
   </div>

    )
}

export default Navbar