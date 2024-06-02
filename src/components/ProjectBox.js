import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";
import './Projects.css';


function ProjectBox({projectPhoto, projectName}) {
    const desc = {
        TindogDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
        TindogGithub : "https://github.com/krishna-p060",
        TindogWebsite : "https://devanshsahni.github.io/tindog/",
    
        BhashiniDesc : "A website that translates between various Indian languages. This project was made to understand API integration, environment variables and vercel deployment. The website is hosted on Vercel .",
        BhashiniGithub : "https://github.com/krishna-p060/bhashini_Language_Translator",
        BhashiniWebsite : "https://krishna-p060.github.io/bhashini_Language_Translator/",
    
        NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
        NewsletterGithub:"https://github.com/krishna-p060",
        NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
        
        WigglesDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
        WigglesGithub:"https://github.com/krishna-p060",
        WigglesWebsite:"https://wiggles.vercel.app/",
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