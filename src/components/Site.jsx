import Navbar from '../pages/Navbar.jsx'
import About from '../pages/About.jsx'
import Projects from '../pages/Projects.jsx'
import Misc from '../pages/Misc.jsx'

import {
  Routes,
  Route,
} from "react-router-dom";

function Site () {

  return (<>
    <Navbar/>
    <hr/>
    <Routes>
    <Route path = '/about'element = {<About/>}/>
    <Route path = '/projects' element = {<Projects/>}/>
    <Route path = '/misc' element = {<Misc/>}/>
    </Routes>
  </>)
}

export default Site;