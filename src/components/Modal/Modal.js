import React from 'react'
import "./Modal.css"
const Modal = ({isVisible, errorMessage}) => {
    if (isVisible) {
      return(
        <div id='modal'>
        <div id='modal-content'>
          <h1>{errorMessage != null? errorMessage : "The Form Been Subnitted Successfully"}</h1>
        </div>
      </div>
      )
    } else{
      return( <></>)
    }
}

export default Modal