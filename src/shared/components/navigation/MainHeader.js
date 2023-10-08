import React from 'react'
import './MainHeader.css'
function MainHeader(props) {
  return (
    <div className={`main__header ${props.className}`}>
        {props.children}
    </div>
  )
}

export default MainHeader