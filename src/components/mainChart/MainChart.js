import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MainChart.css'

export default function MainChart() {
  const [mainStyle2, setMainStyle2] = useState(false)

  return (
    <div className="mainChartContainer">
      <div className="horizontalSection" id="topHor">
        <div
          className="sectionBox"
          id="main1"
          onMouseEnter={() => setMainStyle2(true)}
          onMouseLeave={() => setMainStyle2(false)}
        >
          {mainStyle2 ? (
            <Link to="/zine">
              <div className="sectionText">
                <h1>WHY TAX RESISTANCE?</h1>
                <h3>(click to view zine)</h3>
              </div>
            </Link>
          ) : (
            <div className="sectionText">
              <h1>WAR TAX RESISTANCE</h1>
            </div>
          )}
        </div>
        <div className="chartLine horizontal" />
        <Link to="/about">
          <div className="sectionBox" id="main2">
            <h1>WHO WE ARE</h1>
          </div>
        </Link>
        <div className="chartLine horizontal" />
        <Link
          to="https://www.instagram.com/tax.resistance.collective/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="sectionBox" id="main3">
            <h1>IG</h1>
          </div>
        </Link>
        <div className="chartLine horizontal" />
      </div>
      <div className="verticalSection">
        <div className="chartLine vertical" id="mainVert1" />
        <Link to="/pledgeform">
          <div className="sectionBox" id="main4">
            <div className="sectionText">
              <h1>
                PLEDGE
                <br />
                NOW
              </h1>
            </div>
          </div>
        </Link>
        {/* <div className="chartLine vertical" id="mainVert2" /> */}
      </div>
      {/* <div className="horizontalSection" id="bottomHor">
        <div className="chartLine horizontal" id="mainHor4" />
        <Link to="/pledged">
          <div className="sectionBox" id="main5">
            <h1>
              #<br />
              PLEDGED
            </h1>
          </div>
        </Link>
      </div> */}
    </div>
  )
}
