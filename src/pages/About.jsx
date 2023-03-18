import Modal from '../components/Modal.jsx'
import React from 'react'
import Projects from './Projects.jsx'

function About () {

  const [isOpen, setIsOpen] = React.useState(false);

  return (<>
    <div className="center-wrapper about-page">
      <div className="subtitle-box">
        Hi! I'm Trong, an aspiring Software Developer from Sydney
      </div>
      <div className="about-me-box">
        I have programmed microcontrollers for implants with the Mini Solar team at UNSW and am currently working on a personal full-stack app. I enjoy playing games, going on hikes and painting things that make me laugh.
      </div>

      <div className="external-links">
        <a className="external-link-item" href="https://github.com/trongtngu" target="_blank">
          github
        </a>
        <a className="external-link-item" href="https://www.linkedin.com/in/trong-nguyen-91a7231a2/" target="_blank">
          linkedin
        </a>
      </div>

    </div>

  </>)
}

export default About;