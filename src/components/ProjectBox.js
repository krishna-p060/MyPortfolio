import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";
import './Projects.css';


function ProjectBox({projectPhoto, projectName}) {
    const desc = {
        WallCraftDesc : "An UrbanCompany special project to apply wall panels on wall virtually, built using VisionOS, Swift, ARKit. This project helps consumer in better & quick decision making",
        WallCraftGithub : "https://github.com/krishna-p060/WallCraft_UC_version2",
        WallCraftWebsite : "https://github.com/krishna-p060/WallCraft_UC_version2",
    
        BhashiniDesc : "A website that translates between various Indian languages. This project was made to understand API integration, environment variables and vercel deployment. The website is hosted on Vercel .",
        BhashiniGithub : "https://github.com/krishna-p060/bhashini_Language_Translator",
        BhashiniWebsite : "https://krishna-p060.github.io/bhashini_Language_Translator/",
    
        EventoDesc:"Developed a robust event management backend system using Spring Boot framework to facilitate event creation, scheduling, and participant registration.",
        EventoGithub:"https://github.com/krishna-p060/EventManagement",
        EventoWebsite:"https://github.com/krishna-p060/EventManagement",
        
        DVotingDesc:"A Blockchain based decentralised voting system. Voters can vote through their metamask account and votes will be managed by smart contract deployed on Ethereum blockchain.",
        DVotingGithub:"https://github.com/krishna-p060/decentralised_Voting_System",
        DVotingWebsite:"https://github.com/krishna-p060/decentralised_Voting_System",
      }
    
      let show ='';
      if(desc[projectName + 'Github']===""){
        show="none";
      }
        
      return (
        <div className='projectBox'> 
            <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
            <div>
                <br />
                <h3>{projectName}</h3>
                <br />
                {desc[projectName + 'Desc']}
                <br />
    
                <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
                  <button className='projectbtn'><FaGithub/> Github</button>
                </a>
    
                <a href={desc[projectName + 'Website']} target='_blank'>
                  <button className='projectbtn'><CgFileDocument/> Demo</button>
                </a>
            </div>
        </div>
      )
}

export default ProjectBox