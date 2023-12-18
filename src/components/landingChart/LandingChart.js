import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingChart.css'

export default function LandingChart({ checkYes, setCheckYes }) {
  const navigate = useNavigate()
  const [choice, setChoice] = useState(null)

  function handleChoice(selectedChoice) {
    if (selectedChoice) {
      setChoice(true)
      setCheckYes(true)
    } else {
      const customWindow = window.open('', '_blank', '')
      customWindow.close()
    }
  }

  if (checkYes === true) {
    navigate('/main')
  }

  return (
    <div className="landingChartContainer">
      <div className="sectionBox" id="landing1">
        <div className="typeContainer">
          <h1>INTERESTED IN</h1>
          <h1 className="type1">WAR TAX RESISTANCE?</h1>
        </div>
      </div>
      <div className="chartLine vertical" id="vertical1" />
      <div className="horizontalContainer">
        <div
          className="sectionBox"
          id="landing2"
          onClick={() => handleChoice(false)}
        >
          <h1>NO</h1>
        </div>
        <div className="chartLine horizontal" id="horizontal1" />
        <div
          className="sectionBox"
          id="landing3"
          onClick={() => handleChoice(true)}
        >
          <h1>YES</h1>
        </div>
      </div>
    </div>
  )
}
