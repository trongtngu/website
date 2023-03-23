import React from 'react'

export default function FlexVisualiser() {

  // TODO: make canvas bigger and add more boxes

  const canvasRef = React.useRef();

  const [flexD, setFlexD] = React.useState("")
  const [flexW, setFlexW] = React.useState("")
  const [justC, setJustC] = React.useState("")
  const [alignItems, setAlignItems] = React.useState("")
  const [alignContent, setAlignContent] = React.useState("")
  const [gap, setGap] = React.useState("")

  const handleFlexDirection = (event) => {
    canvasRef.current.style.flexDirection = event.target.value;
    setFlexD(event.target.value);
  }

  const handleFlexWrap = (event) => {
    canvasRef.current.style.flexWrap = event.target.value;
    setFlexW(event.target.value);
  }

  const handleJustify = (event) => {
    canvasRef.current.style.justifyContent = event.target.value;
    setJustC(event.target.value);
  }

  const handleAlignItems = (event) => {
    canvasRef.current.style.alignItems = event.target.value;
    setAlignItems(event.target.value);
  }

  const handleAlignContent = (event) => {
    canvasRef.current.style.alignContent = event.target.value;
    setAlignContent(event.target.value);
  }

  const handleGap = (event) => {
    if (event.target.value === "col-10px") {
      canvasRef.current.style.gap = "0px"
      canvasRef.current.style.columnGap = "10px"
      setGap("columned")
    }
    else {
      canvasRef.current.style.gap = event.target.value;
      setGap(event.target.value);
    }
    
  }

  return (
    <>
      <div className="center-wrapper">
        <div className="subtitle-box">Flexbox Visualiser</div>

        <div className="visual-wrapper">
          <div className='visual-buttons-container'>

            <div className="visual-selector">
              flex-direction:
              <select value={flexD} onChange={handleFlexDirection}>
                <option value="row" className="">row (default) </option>
                <option value="row-reverse" className="">row-reverse</option>
                <option value="column" className="">column</option>
                <option value="column-reverse" className="">column-reverse</option>
              </select>
            </div>

            <div className="visual-selector">
              flex-wrap:
              <select value={flexW} onChange={handleFlexWrap}>
                <option value="nowrap" className="">nowrap (default) </option>
                <option value="wrap" className="">wrap</option>
                <option value="wrap-reverse" className="">wrap-reverse</option>
              </select>
            </div>

            <div className="visual-selector">
              justify-content:
              <select value={justC} onChange={handleJustify}>
                <option value="flex-start" className="">flex-start (default)</option>
                <option value="flex-end" className="">flex-end</option>
                <option value="center" className="">center</option>
                <option value="space-between" className="">space-between</option>
                <option value="space-around" className="">space-around</option>
                <option value="space-evenly" className="">space-evenly</option>
                <option value="start" className="">start </option>
                <option value="right" className="">right</option>
              </select>
            </div>

            <div className="visual-selector">
              align-items:
              <select value={alignItems} onChange={handleAlignItems}>
                <option value="flex-start" className="">flex-start (default)</option>
                <option value="flex-end" className="">flex-end</option>
                <option value="center" className="">center</option>
                <option value="stretch" className="">stretch</option>
                <option value="baseline" className="">baseline</option>
              </select>
            </div>

            <div className="visual-selector">
              align-content:
              <select value={alignContent} onChange={handleAlignContent}>
              <option value="flex-start" className="">flex-start (default)</option>
                <option value="flex-end" className="">flex-end</option>
                <option value="center" className="">center</option>
                <option value="stretch" className="">stretch</option>
                <option value="space-between" className="">space-between</option>
                <option value="space-around" className="">space-around</option>
              </select>
            </div>

            <div className="visual-selector">
              gap:
              <select value={gap} onChange={handleGap}>
                <option value="0px" className="">0px (default)</option>
                <option value="10px" className="">10px (row-gap: 10px)</option>
                <option value="10px 10px" className="">10px 10px (row-gap: 10px + column-gap: 10px)</option>
                <option value='col-10px' className="">column-gap: 10px</option>
              </select>
            </div>

          </div>

          <div id="visual-canvas" ref={canvasRef}>
            <div className="visual-box">1</div>
        </div>

        </div>

      </div>
    </>
  )
}
