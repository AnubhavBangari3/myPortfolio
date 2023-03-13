
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,faLinkedin,faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function NavbarComponents() {
  return (
    <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Anubhav Bangari</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    
                    
                    <Nav.Link href="https://leetcode.com/beingab329/" target="_blank">
                      <img className="leet" src="../images/leet.png" alt="leetcode"></img>
                    </Nav.Link>
                    <Nav.Link href="https://github.com/AnubhavBangari3" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/anubhav-bangari-6092bb1a3/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></Nav.Link>
                    <Nav.Link href="https://www.instagram.com/anubhav.bangari/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></Nav.Link>
                    <Nav.Link href="mailto:beingAb329@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="2x"  /></Nav.Link>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>


    </div>
  )
}

export default NavbarComponents