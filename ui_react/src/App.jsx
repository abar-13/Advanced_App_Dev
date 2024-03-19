import { useState } from 'react'

import './assets/style.css'
import './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Footer from './pages/Footer.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Program from './pages/Program.jsx'
import Message from './pages/Message.jsx'
import About from './pages/About.jsx'
import Explore from './pages/Explore.jsx'
import UserList from './pages/UserList.jsx'
import YogaList from './pages/YogaList.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/adm' element={<Dashboard/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/yp' element={<Program/>}/>
    <Route path='/messaging' element={<Message/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/explore' element={<Explore/>}/>
    <Route path='/user' element={<UserList/>}/>
    <Route path='/yogList' element={<YogaList/>}/>
   
      </Routes>
      
      <Footer/></BrowserRouter>
    </>
  )
}

export default App
