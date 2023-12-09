import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './ReturnButton.css'

export default function ReturnButton() {
  const [showReturn, setShowReturn] = useState(false)
  const location = useLocation().pathname

  useEffect(() => {
    if (location !== '/main' && location !== '/') {
      setShowReturn(true)
    } else {
      setShowReturn(false)
    }
  }, [location])

  return (
    <>
      <Link to="/main">
        <div className={`returnButton ${showReturn ? 'visible' : 'invisible'}`}>
          <h3>{'<- '}BACK</h3>
        </div>
      </Link>
    </>
  )
}
