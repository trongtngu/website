import React from 'react'
import {
  useNavigate
} from "react-router-dom";


import SeleniumBlog from './SeleniumBlog';
import FlexVisualiser from './FlexVisualiser';

export default function Tidbits() {

  let navigate = useNavigate();


  const gotoFlexVisualiser = () => {
    navigate('/tidbits/FlexVisualiser')
  }

  return (
  <>
    <div className="center-wrapper tidbits-wrapper">
      <div className="subtitle-box tidbit-subtitle-box">
          Tidbit
          <div className="definition">/ˈtɪdbɪt/</div>
          <div className="definition">'a small piece of tasty food' - my best friend Google</div> 
      </div>

      <div className="tidbit-container">
        <div className='tidbit-subtitle-text' onClick={gotoFlexVisualiser}>
          Flexbox Visualiser
          <div className="definition wonky">19 Mar '23</div>
        </div>
      </div>
    </div>
  </>
    
  )
}