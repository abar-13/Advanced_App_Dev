import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/style.css'
import './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Footer from './pages/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      // <Route path='/' element={<Footer/>}/>
      </Routes>
      <Footer/></BrowserRouter>
    </>
  )
}

export default App
