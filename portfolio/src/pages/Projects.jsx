import React from 'react'
import '../styles/project.css'
import { Projects } from '../Util/pro'
import Slide from 'react-reveal/Slide';
import RubberBand from 'react-reveal/RubberBand'

const Project = () => {
  return (
    <>
    <div className="project-container" id="Project">
      <RubberBand>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Here are my some projects.
        </p>
      </RubberBand>
      <Slide left>
      <div className="rowd">
        {Projects.map((tech) => (
            <div key={tech._id} className="main" >
              <div className="imge" >
                  <img className='imagebox' src={tech.image} alt='project-images' />
                  <h4 style={{textAlign: 'center', padding:'20px'}}> {tech.name}  </h4>
              </div>    
                <div className="content">
                  <h4 style={{textAlign:'center', color:'red'}}> {tech.name} </h4>
                  <p style={{textAlign:'center'}}> {tech.info} </p>
                  <p style={{textAlign:'center'}}> {tech.skills} </p>
                </div>
            </div>
        ))}
      </div>
      </Slide>
    </div>
  </>
  )
}

export default Project