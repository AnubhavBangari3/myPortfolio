
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,faLinkedin,faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



function ContactMe() {
  return (
    <div className="contact my-2">
        <h1 className="headP my-2">Contact Me</h1>
        
        <div className="social my-4">

        <a href="https://www.instagram.com/anubhav.bangari/" target="_blank" rel="noreferrer" className="soc mx-4"><FontAwesomeIcon icon={faInstagram} size="4x" /></a>
        <a href="https://www.linkedin.com/in/anubhav-bangari-6092bb1a3/" rel="noreferrer" target="_blank" className="soc mx-4"><FontAwesomeIcon icon={faLinkedin} size="4x" /></a>
        <a href="https://github.com/AnubhavBangari3" target="_blank" rel="noreferrer" className="soc mx-4"><FontAwesomeIcon icon={faGithub} size="4x" /></a>
        <a href="mailto:beingAb329@gmail.com" target="_blank" rel="noreferrer" className="soc mx-4"><FontAwesomeIcon icon={faEnvelope} size="4x"  /></a>
        
        
        </div>
      
    </div>
  )
}

export default ContactMe
