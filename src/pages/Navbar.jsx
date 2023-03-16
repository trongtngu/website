
import {
  useNavigate
} from "react-router-dom";  

function Navbar () {

  let navigate = useNavigate();

  const gotoAbout = () => {
    navigate('/about')
  }
  const gotoProjects = () => {
    navigate('/projects')
  }

    return (<>
    <div className="name-box">trong nguyen</div>
    <div className="navbar">
      <div className="navbar-item" onClick={gotoAbout}>about</div>
      <div className="navbar-item" onClick={gotoProjects}>projects</div>
    </div>
    <hr/>
  </>)
}

export default Navbar;