import React from 'react'
import './Pledged.css'

// importing imgs
import map from '../../assets/MAP.png'

export default function Pledged() {
  return (
    <div className="pageContainer" id="pledgedPage">
      <div className="titleBox" id="pledgedTitle">
        <h1>
          #<br />
          PLEDGED
        </h1>
      </div>
      <div className='overflowContainer'>
        <div className="mapWrapper">
          <img src={map} alt="pledgedMap" className="imgBox" />
        </div>
        <div className="titleBox" id="whywepledge">
          <h1>WHY WE PLEDGE</h1>
        </div>
        <div className="pledgesBox">
          <h1>""</h1>
        </div>
      </div>
    </div>
  )
}
