import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MainChart.css'

export default function MainChart() {
  return (
    <div className="mainChartContainer">
      <div className="horizontalSection">
        <div className="sectionBox" id="warTax">
          <h1>WAR TAX RESISTANCE</h1>
        </div>
        <div className="sectionConnectLine" id="1" />
        <div className="sectionBox" id="about">
          <h1>ABOUT</h1>
        </div>
        <div className="sectionConnectLine" id="2" />
        <div className="sectionBox" id="ig">
          <h1>IG</h1>
        </div>
        <div className="sectionConnectLine" id="3" />
      </div>
    </div>
  )
}
