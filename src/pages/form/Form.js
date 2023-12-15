import React from 'react'
import './Form.css'

export default function Form() {
  return (
    <div className="pageContainer" id="formpage">
      <div className="titleBox" id="formTitle">
        <h1>PLEDGE NOW</h1>
      </div>
      <div className="formContainer">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf4mNSrJw7lBJEAOMJH3SmTUvgDECIzixmN-vxJ32GHojzEqQ/viewform?embedded=true"
          className="warTaxForm"
          title="wartaxgform"
        ></iframe>
      </div>
    </div>
  )
}
