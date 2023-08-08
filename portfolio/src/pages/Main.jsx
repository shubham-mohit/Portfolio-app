import React from 'react'
import '../styles/Main.css'
import Typewriter from 'typewriter-effect'
import { BsGithub } from "react-icons/bs";

const Main = () => {
  return (
    <>
      <div className='container-fluid home-container' id='Home'>
        <div className='container home-content'>
          <h2> Hi! 👋 I am Shubham </h2>
          <h3>
          <Typewriter
          options={{
            strings: ['MERN STACK DEVELOPER'],
            autoStart: true,
            loop: true,
          }}
          />
          </h3>
          <div className='home-buttons ' >
            {/* <button className='hire-me'> Hire Me </button> */}
            <a className = 'hire-me' href = 'http://api.whatsapp.com/send?phone=8698568231' target='_blank' rel='noreferrer'> Hire Me </a>
            <a className = 'cv' href = 'https://drive.google.com/drive/folders/1Ln564f7SfTzWL2CsyCsrA9KMJEG-7_Jr?usp=drive_link' target='_blank' download="shubham_resume.pdf"> Download CV </a>
            {/* <button className='cv'> Download cv </button> */}
            <a className = 'hire-me' href = 'https://github.com/shubham-mohit' target='_blank' rel='noreferrer'> <BsGithub/> View GitHub </a>

          </div>
        </div>
      </div>
    </>
  )
}

export default Main