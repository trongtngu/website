import Modal from '../components/Modal.jsx'
import React from 'react'

function Projects () {

  const [openOne, setOpenOne] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);
  const [openThree, setOpenThree] = React.useState(false);
  const [openFour, setOpenFour] = React.useState(false);

  React.useEffect(()=> {
    if (openOne || openTwo || openThree || openFour) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'unset';
    }
  })

  return (<>
    <div className="center-wrapper">
      <div className="projects-subtitle">projects</div>

      <div className="projects-box" onClick={() => setOpenOne(true)}>

        <div className="project-name">
          Mini Solar Implant
        </div>

        <div className="project1-img"></div>
      </div>

      <Modal open={openOne} onClose={() => setOpenOne(false)}>
        <div className="project-modal">
          <div className='project-modal-img-1'>
          </div>
          <div className ='project-modal-desc'>
            <div className="project-modal-company">Mini Solar</div>
            <div className="project-modal-name">Subdermal Implant</div>
            My role was to program microcontrollers to collect and transfer glucose readings from sensors using Bluetooth and minimal power. The code for this method is written in C++ and voltage data was processed using Python libraries.
          </div>
        </div>
      </Modal>

      <div className="projects-box" onClick={() => setOpenTwo(true)}>
        <div className="project-name">
          Foodie App
        </div>

        <div className="project2-img"></div>
      </div>

      <Modal open={openTwo} onClose={() => setOpenTwo(false)}>
        <div className="project-modal">
          <div className='project-modal-img-2'>
          </div>
          <div className ='project-modal-desc'>
            <div className="project-modal-company">Personal</div>
            <div className="project-modal-name">Foodie App</div>
            I wanted to create this app because my friends and I would always have trouble finding places to eat. The app continually presents the user with different restaurants catergorised by price, cuisine and distance which can be accepted or declined. The app includes a React frontend and an Express backend.
          </div>
        </div>
      </Modal>

      <div className="projects-box" onClick={() => setOpenThree(true)}>
        <div className="project-name">
          Restaurant Web Crawler
      </div>
        <div className="project3-img"></div>
      </div>

      <Modal open={openThree} onClose={() => setOpenThree(false)}>
        <div className="project-modal">
          <div className='project-modal-img-3'>
          </div>
          <div className ='project-modal-desc'>
            <div className="project-modal-company">Personal</div>
            <div className="project-modal-name">Restaurant Web Crawler</div>
            I developed this program to automate the collecting of restaurant names and data from Google searches. Currently I can collect 200 different detail sets including name, price-point, address and cuisine of restaurants nearby to a specified location within about 2 minutes of the program running. The program is written in Python and uses the Selenium library.
          </div>
        </div>
      </Modal>

      <div className="projects-box" onClick={() => setOpenFour(true)}>
        <div className="project-name">
          Loop Hero Clone
        </div>
        <div className="project4-img"></div>
      </div>

      <Modal open={openFour} onClose={() => setOpenFour(false)}>
        <div className="project-modal">
          <div className='project-modal-img-4'>
          </div>
          <div className ='project-modal-desc'>
            <div className="project-modal-company">Personal</div>
            <div className="project-modal-name">Loop Hero Clone</div>
            This project aimed imitate the experience of Loop Hero with the same endless RPG style. The player can encounter different enemies, collect different items as well as equip weapons and armour. The project is written in Java using object oriented concepts and JavaFX GUI.
          </div>
        </div>
      </Modal>
    </div>
  </>)  
}

export default Projects;