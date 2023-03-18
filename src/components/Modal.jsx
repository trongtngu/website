import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  backgroundColor: "#3c3939"
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1000
}

export default function Modal({open, children, onClose}) {

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose}>
        <div style={MODAL_STYLES} onClick={((e) => e.stopPropagation())}>
        {children}
        </div>  
      </div>
    </>,
    document.getElementById('portal')
  )
}
