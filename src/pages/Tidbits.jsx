import React from 'react'

export default function Tidbits() {
  return (
  <>
    <div className="center-wrapper tidbits-wrapper">
      <div className="subtitle-box tidbit-subtitle-box">
          Tidbit
          <div className="definition">/ˈtɪdbɪt/</div>
          <div className="definition">'a small piece of tasty food' - my best friend Google</div> 
      </div>

      <div className="tidbit-container">
        <div className='tidbit-subtitle-text'>Beginner guide to Python Selenium
          <div className="definition wonky">19 Mar '23</div>
        </div>
        <div className='tidbit-subtitle-text'>
          How to change Terminal colours on Ubuntu
          <div className="definition wonky">19 Mar '23</div>
        </div>
        <div className='tidbit-subtitle-text'>Calorie Tracking - Food Tips
          <div className="definition wonky">19 Mar '23</div>
        </div>
        <div className='tidbit-subtitle-text'>Physical Exercise Recommendations
          <div className="definition wonky">19 Mar '23</div>
        </div>
      </div>
    </div>
  </>
    
  )
}