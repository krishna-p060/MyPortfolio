import React from 'react';
import ProjectBox from './ProjectBox';
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';
import p4 from '../images/p4.jpg';


function Projects() {
    return (
        <div>
          <h1 className='projectHeading'>My <b>Projects</b></h1>
          <div className='project'>
            <ProjectBox projectPhoto={p1} projectName="Wiggles" />
            <ProjectBox projectPhoto={p2} projectName="Newsletter" />
            <ProjectBox projectPhoto={p3} projectName="Bhashini" />
            <ProjectBox projectPhoto={p4} projectName="Tindog" />
          </div>
    
        </div>
      )
}

export default Projects;