import Navbar from '../pages/Navbar.jsx'
import About from '../pages/About.jsx'
import Projects from '../pages/Projects.jsx'
import Tidbits from '../pages/Tidbits.jsx'
import React from 'react'

import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

function Site () {

  let navigate = useNavigate()

  React.useEffect( () => {
    navigate('/about');
  }, [])

  return (<>
    <Navbar/>
    <Routes>
    <Route path = '/about'element = {<About/>}/>
    <Route path = '/projects' element = {<Projects/>}/>
    <Route path = '/tidbits' element = {<Tidbits/>}/>
    </Routes>
  </>)
}

export default Site;