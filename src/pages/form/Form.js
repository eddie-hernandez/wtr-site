import React from 'react'

export default function Form() {
  return (
    <div className='formPageContainer'>
      <div className="titleBox">
        <h1>
          #<br />
          PLEDGED
        </h1>
      </div>
      <div className="formContainer">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf4mNSrJw7lBJEAOMJH3SmTUvgDECIzixmN-vxJ32GHojzEqQ/viewform?embedded=true"
          width="640"
          height="1774"
          title='googleform'
        >
          Loading…
        </iframe>
      </div>
    </div>
  )
}
