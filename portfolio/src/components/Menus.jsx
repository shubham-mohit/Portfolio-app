import React from 'react'
import '../styles/Menus.css'
import {FcHome,FcAbout,FcPortraitMode,FcBiotech,FcVideoProjector,FcBusinessContact} from 'react-icons/fc'
import { Link  } from 'react-scroll'
import Fade from 'react-reveal/Fade';
import profile from '../data/profile.jpeg'

const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (<>
      <div className='profile-image'>
            <img src= {profile} alt='me'/>
        </div>
        <Fade left>
        <div className='nav-items'>
          <div className='nav-item'>
            <div className='navbar-links'>
            <Link to='Home' spy={true} smooth={true} offset={-100} duration={100}>
            <FcHome/>
              Home
            </Link>
            </div>
            <div className='navbar-links'>
            <Link to='About' spy={true} smooth={true} offset={-100} duration={100}>
            <FcAbout/>
              About Me
            </Link>
            </div>
            <div className='navbar-links'>
            <Link to='Education' spy={true} smooth={true} offset={-100} duration={100}>
            <FcPortraitMode/>
              Experiance
            </Link>
            </div>
            <div className='navbar-links'>
            <Link to='Tech' spy={true} smooth={true} offset={-100} duration={100}>
            <FcBiotech/>
              Tech-Stack
            </Link>
            </div>
            <div className='navbar-links'>
            <Link to='Project' spy={true} smooth={true} offset={-100} duration={100}>
            <FcVideoProjector/>
              Project
            </Link>
            </div>
            <div className='navbar-links'>
            <Link to='Contact' spy={true} smooth={true} offset={-100} duration={100}>
            <FcBusinessContact/>
              Contact Me
            </Link>
            </div>
            </div>
        </div>
        </Fade>
         </>) : (<>
          <div className='nav-items'>
          <div className='nav-item'>
            <div className='navbar-links'>
            <Link to='Home' spy={true} smooth={true} offset={-100} duration={100}>
            <FcHome title='Home'/>
            </Link>
            </div>
            <div className='navbar-links'>
            <Link to='About' spy={true} smooth={true} offset={-100} duration={100}>
            <FcAbout title='About-Me'/>
            </Link>
            </div>
            <div className='navbar-links'>
            <Link to='Education' spy={true} smooth={true} offset={-100} duration={100}>
            <FcPortraitMode title='Experience'/>
            </Link>
            </div>
            <div className='navbar-links'>
            <Link to='Tech' spy={true} smooth={true} offset={-100} duration={100}>
            <FcBiotech title='Tech-Skills'/>
            </Link>
            </div>
            <div className='navbar-links'>
            <Link to='Project' spy={true} smooth={true} offset={-100} duration={100}>
            <FcVideoProjector title='Projects'/>
            </Link>
            </div>
            <div className='navbar-links'>
            <Link to='Contact' spy={true} smooth={true} offset={-100} duration={100}>
            <FcBusinessContact title='Contact Me'/>
            </Link>
            </div>
            </div>
        </div>
         </>)}
    </>
  )
}

export default Menus