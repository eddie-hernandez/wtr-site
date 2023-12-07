import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Main from './pages/main/Main'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  )
}
