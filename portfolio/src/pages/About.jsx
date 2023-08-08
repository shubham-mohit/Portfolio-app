import React from 'react'
import '../styles/About.css'
import Zoom from 'react-reveal/Zoom';
import profile from '../data/profile.jpeg'

const About = () => {
  return (
    <>
    <div className='about' id='About'>
        <div className='row'>
        <Zoom>
            <div className='col-md-6 col-xl-6 col col-lg-6 col-xs-8 about-img'>
                <img src= {profile} alt='profile' />
            </div>
          </Zoom>
            <div className='col-md-6 col-xl-6 col col-lg-6 col-xs-8 about-box' >
            <h2> About Me </h2>
               <p> Hello My name is Shubham Baban Mohite. A passionate, Hard working and effective Web Developer who loves coding and always try to learn new Technologies, always try to solve problems in efficient way.
                Effectively manages assignments and team members. Dedicated to self-development to provide expectation-exceeding service. </p>
                <p>
                Passionate about technolgy , hard worker , quick learner
                </p>
            </div>
        </div>
        </div>
    </>
  )
}

export default About