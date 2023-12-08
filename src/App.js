import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Main from './pages/main/Main'
import About from './pages/about/About'
import Form from './pages/form/Form'
import Pledged from './pages/pledged/Pledged'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path='/pledgeform' element={<Form />} />
        <Route path='/pledged' element={<Pledged />} />
      </Routes>
    </div>
  )
}
