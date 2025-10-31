import React, { useEffect } from 'react'
import { useTheme } from '../../store/themeStore'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
    const {mode,toggleTheme}=useTheme()

    useEffect(() => {
      document.body.classList.remove("light","dark");
      document.body.classList.add(mode)
    }, [mode])
    
  return (
    <section>

        <nav className='  fixed left-0 top-0 flex h-full md:w-1/4 lg:w-1/6 flex-col   p-5 font-bold text-xl  justify-between border-r  '>
      
        <div className={`flex  gap-4 uppercase flex-col mt-10 ${mode==="dark" ? "text-white":"text-black"}`}>
         <div>
         <SearchBar />
       </div>
        <Link to='/'>Home</Link>
        <Link to='/chat' >Chat</Link>
        <Link to='/profile'>Create</Link>
        </div>
        <div>
          <button onClick={toggleTheme}>{
          mode === "dark" ? "DarkMode" : "LightMode"
          }</button>
        </div>
        
      </nav>
    </section>
  )
}

export default Navbar