
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

  const gotoTidbits = () => {
    navigate('/tidbits')
    // TODO: add tidbits navbar item back

    // <div className="navbar-item" onClick={gotoTidbits}>tidbits</div>
  }

    return (<>
    <div className="name-box">trong nguyen</div>
    <div className="navbar">
      <div className="navbar-item" onClick={gotoAbout}>about</div>
      <div className="navbar-item" onClick={gotoProjects}>projects</div>
      <div className="navbar-item" onClick={gotoTidbits}>tidbits</div>
    </div>
    <hr/>
  </>)
}

export default Navbar;