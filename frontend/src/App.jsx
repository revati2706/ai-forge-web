import React, { useEffect } from 'react'
import Home from './pages/Home'
import { Routes,Route,Link } from 'react-router-dom'
import Chat from './pages/Chat'
import CreatePersona from './pages/CreatePersona'
import Navbar from './components/NavBar/Navbar'


const App = () => {
 

  return (
    <main className={` min-h-screen w-screen md:pl-[25%] lg:pl-[20%] flex  justify-center `} >

      <Navbar/>
      
      <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/chat' element={<Chat/>}/>
         <Route path='/profile' element={<CreatePersona/>}/>
      </Routes>
    </main>
  )
}

export default App
