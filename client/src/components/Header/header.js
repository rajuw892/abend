import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../images/logo.png'
import Avatar from '../../images/avatar.jpg'
import { logout } from '../../redux/actions/authAction'
import './header.css'


function Header() {
     
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

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
             <p className="Header_right_heading"><Link className="anchortag" to="/serviceprovider">Service Provider</Link></p>
               
            
           
           <div  className="nav-item dropdown">
          <span className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
           role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             <img src={Avatar} alt="avatar" style={{borderRadius: '50%', width: '40px', height: '40px'}}/>
           </span>

               <div className="dropdown-menu" aria-labelledby="navbarDropdown">

               <Link className="dropdown-item" to={`/userprofile/${auth.user._id}`}>Profile</Link>

               <div className="dropdown-divider"></div>
               <Link className="dropdown-item" to="">Subscription</Link>

               <div className="dropdown-divider"></div>
               <Link className="dropdown-item" to="/"
               onClick={() => dispatch(logout())}>
               Logout
               </Link>
               </div>
               </div>

               <SearchIcon className="searchButton"/>

        </div>
   </div>

    )
}

export default Header