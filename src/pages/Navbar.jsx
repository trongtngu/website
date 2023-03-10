
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
  const gotoMisc = () => {
    navigate('/misc')
  }
    return (<>
    <div className="name-box">trong nguyen</div>
    <div className="navbar">
      <a className="navbar-item" onClick={gotoAbout}>about</a>
      <a className="navbar-item" onClick={gotoProjects}>projects</a>
      <a className="navbar-item" onClick={gotoMisc}>misc</a>
    </div>
  </>)
}

export default Navbar;