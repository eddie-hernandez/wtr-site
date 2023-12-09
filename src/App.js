import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Landing from './pages/landing/Landing'
import Main from './pages/main/Main'
import About from './pages/about/About'
import Form from './pages/form/Form'
import Pledged from './pages/pledged/Pledged'
import ReturnButton from './components/returnButton/ReturnButton'

export default function App() {
  const location = useLocation().pathname

  useEffect(() => {
    if (location === '/main') {
      document.body.classList.add('overflowRestrict')
    } else if (location === '/about') {
      document.body.classList.add('whitebg')
    } else if (location !== '/about') {
      document.body.classList.remove('whitebg')
    } else {
      document.body.classList.remove('overflowRestrict')
    }
  }, [location])

  useEffect(() => {
    if (location === '/about') {
      document.body.classList.add('whitebg')
    } else {
      document.body.classList.remove('whitebg')
    }
  }, [location])

  return (
    <div className="App">
      <ReturnButton />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/pledgeform" element={<Form />} />
        <Route path="/pledged" element={<Pledged />} />
      </Routes>
    </div>
  )
}
