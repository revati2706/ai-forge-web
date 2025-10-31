import React from 'react'
import { useStore } from '../../store/useStore'

const SearchBar = () => {
    const {searchPersona,setSearchPersona}=useStore()
  return (
    <section>
        <input 
        placeholder='Search...'
        className='searchBar'
        type="text" value={searchPersona} onChange={(e)=>setSearchPersona(e.target.value)}  />

    </section>
  )
}

export default SearchBar