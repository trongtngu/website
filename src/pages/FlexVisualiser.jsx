import React from 'react'

export default function FlexVisualiser() {
  return (
    <>
      <div className="center-wrapper">
        <div className="subtitle-box">Flexbox Visualiser</div>

        <div className="visual-wrapper">
          <div className='visual-buttons-container'>
            <button>flex-direction: row</button>
            <button>flex-direction: row-reverse</button>
            <button>flex-direction: column</button>
            <button>flex-direction: column-reverse</button>
            <button>flex-wrap: nowrap</button>
            <button>flex-wrap: wrap</button>
            <button>flex-wrap: wrap-reverse</button>
            <button>justify-content: flex-start</button>
            <button>justify-content: flex-end</button>
            <button>justify-content: center</button>
            <button>justify-content: space-between</button>
            <button>justify-content: space-around</button>
            <button>justify-content: space-evenly</button>
            <button>justify-content: start</button>
            <button>justify-content: right</button>
            <button>align-items: stretch</button>
            <button>flex-direction: row-reverse</button>
            <button>flex-direction: column</button>
            <button>flex-direction: column-reverse</button>
          </div>
          <div className="visual-canvas">
            <div className="visual-box">
              
            </div>
        </div>
        </div>

      </div>
    </>
  )
}
