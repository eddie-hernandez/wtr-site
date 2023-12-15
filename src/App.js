import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Landing from './pages/landing/Landing'
import Main from './pages/main/Main'
import Zine from './pages/zine/Zine'
import Form from './pages/form/Form'
import Pledged from './pages/pledged/Pledged'
import ReturnButton from './components/returnButton/ReturnButton'

export default function App() {
  const location = useLocation().pathname

  useEffect(() => {
    if (location === '/main') {
      document.body.classList.add('overflowRestrict')
      document.body.classList.remove('whitebg')
    } else {
      document.body.classList.remove('overflowRestrict')
      if (location === '/zine') {
        document.body.classList.add('whitebg')
      } else {
        document.body.classList.remove('whitebg')
      }
    }
  }, [location])

  return (
    <div className="App">
      <ReturnButton />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/zine" element={<Zine />} />
        <Route path="/pledgeform" element={<Form />} />
        {/* <Route path="/pledged" element={<Pledged />} /> */}
      </Routes>
    </div>
  )
}
