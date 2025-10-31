import React, { useEffect } from 'react'
import { useStore } from '../store/useStore'
import { Link } from 'react-router-dom'

const Home = () => {
   const {selectPersona,fetchPersonas,filteredPersona}=useStore()
   useEffect(() => {
     fetchPersonas();
   }, [fetchPersonas])
   
  return (
    <section className='h-full w-full flex flex-col items-center p-5 gap-5'>
    <h1 className='font-bold text-2xl'>AI Personas</h1>
    <div className='grid grid-cols-4 gap-4'>
        {filteredPersona.map((p)=>(
            <div key={p.id} className='card flex  flex-col items-center gap-3 '>
                <h1>{p.name}</h1>   
                <h2>{p.role}</h2>
                <h3>{p.description}</h3>
                <Link to='/chat'><button className='btn' onClick={()=>selectPersona(p)}>Chat with me</button></Link>
            </div>
        ))}

    </div>
   
    </section>
    )
}

export default Home