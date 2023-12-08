import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './MainChart.css'

export default function MainChart() {
  return (
    <div className="mainChartContainer">
      <div className="horizontalSection" id="topHor">
        <div className="sectionBox" id="main1">
          <h1>WAR TAX RESISTANCE</h1>
        </div>
        <div className="chartLine horizontal" />
        <Link to="/about">
          <div className="sectionBox" id="main2">
            <h1>ABOUT</h1>
          </div>
        </Link>
        <div className="chartLine horizontal" />
        <a
          href="https://www.instagram.com/tax.resistance.collective/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="sectionBox" id="main3">
            <h1>IG</h1>
          </div>
        </a>
        <div className="chartLine horizontal" />
      </div>
      <div className="verticalSection">
        <div className="chartLine vertical" id="mainVert1" />
        <Link to="pledgeform">
          <div className="sectionBox" id="main4">
            <h1>
              PLEDGE
              <br />
              NOW
            </h1>
          </div>
        </Link>
        <div className="chartLine vertical" id="mainVert2" />
      </div>
      <div className="horizontalSection" id="bottomHor">
        <div className="chartLine horizontal" id='mainHor4' />
        <Link>
          <div className="sectionBox" id="main5"><h1>
            #<br/>PLEDGED</h1></div>
        </Link>
      </div>
    </div>
  )
}

{
  /* <div className="mainChartContainer">
  <div className="horizontalSection">
    <div className="sectionBox" id="main1">
      <h1>WAR TAX RESISTANCE</h1>
    </div>
    <div className="chartLine horizontal" />
    <Link to="/about">
      <div className="sectionBox" id="main2">
        <h1>ABOUT</h1>
      </div>
    </Link>
    <div className="chartLine horizontal" />
    <a
      href="https://www.instagram.com/tax.resistance.collective/"
      rel="noreferrer"
      target="_blank"
    >
      <div className="sectionBox" id="main3">
        <h1>IG</h1>
      </div>
    </a>
    <div className="rotateContainer">
      <div className="rotateLine" id="horToVer" />
      <Link to="/pledgeform">
        <div className="sectionBox" id="main4">
          <h1>
            PLEDGE
            <br />
            NOW
          </h1>
        </div>
      </Link>
      <div className="rotateLine" id="verToHor" />
      <Link to="/pledged">
        <div className="sectionBox" id="main5">
          <h1>
            #<br />
            PLEDGED
          </h1>
        </div>
      </Link>
    </div>
  </div>
  <div></div>
</div> */
}
