import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MainChart.css'

export default function MainChart() {
  return (
    <div className="mainChartContainer">
      <div className="horizontalSection">
        <div className="sectionBox" id="main1">
          <h1>WAR TAX RESISTANCE</h1>
        </div>
        <div className="chartLine horizontal" />
        <div className="sectionBox" id="main2">
          <h1>ABOUT</h1>
        </div>
        <div className="chartLine horizontal" />
        <div className="sectionBox" id="main3">
          <h1>IG</h1>
        </div>
        <div className="rotateContainer">
          <div className="rotateLine" id="horToVer" />
          <div className="sectionBox" id="main4">
            <h1>
              PLEDGE
              <br />
              NOW
            </h1>
          </div>
          <div className="rotateLine" id="verToHor" />
          <div className="sectionBox" id="main5">
            <h1>
              #<br />
              PLEDGED
            </h1>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

/* <div className="horizontalSection">
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
      </div> */
