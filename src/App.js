import './App.css'
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Landing from './pages/landing/Landing'
import Main from './pages/main/Main'
import Zine from './pages/zine/Zine'
import Form from './pages/form/Form'
import Pledged from './pages/pledged/Pledged'
import ReturnButton from './components/returnButton/ReturnButton'
import About from './pages/about/About'

export default function App() {
  const [checkYes, setCheckYes] = useState(null)
  const location = useLocation().pathname
  const navigate = useNavigate()

  useEffect(() => {
    if (location === '/main') {
      document.body.classList.add('overflowRestrict')
      document.body.classList.remove('whitebg')
    } else {
      document.body.classList.remove('overflowRestrict')
    }
    if (location === '/zine') {
      document.body.classList.add('whitebg')
    } else {
      document.body.classList.remove('whitebg')
    }
    if (location === '/about') {
      document.body.classList.add('aboutbg')
    } else {
      document.body.classList.remove('aboutbg')
    }
  }, [location])

  return (
    <div className="App">
      {checkYes !== null && checkYes === false && (
        <>
          <Navigate to="/error" replace />
        </>
      )}
      {checkYes === true && <ReturnButton />}
      <Routes>
        {checkYes === null && (
          <Route
            path="/"
            element={<Landing checkYes={checkYes} setCheckYes={setCheckYes} />}
          />
        )}
        <>
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/zine" element={<Zine />} />
          <Route path="/pledgeform" element={<Form />} />
          <Route
            path="/error"
            element={<h1 className="errorMessage">NOT ALLOWED</h1>}
          />
          {/* <Route path="/pledged" element={<Pledged />} /> */}
        </>
      </Routes>
    </div>
  )
}
