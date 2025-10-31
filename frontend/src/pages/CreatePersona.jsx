import React, { useState } from 'react'
import { useStore } from '../store/useStore'
import { useTheme } from '../store/themeStore'
const CreatePersona = () => {
    const addPersona=useStore((state)=>state.addPersona)
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [description, setDes] = useState("")
    
    const HandleSubmit=(e)=>{
        e.preventDefault();
        
        const newPerson={
            id:Date.now(),
            name,
            role,
            description,
        }

        addPersona(newPerson)

        setName("")
        setRole("")
        setDes("")
    }
  return (
    <section className='h-full w-full flex flex-col items-center p-[20%] gap-5'>
       <h1>create a new persona </h1>
       <form onSubmit={HandleSubmit} className='flex flex-col  gap-4 items-center'>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Name' className='' />
        <input type="text" value={role} onChange={(e)=>setRole(e.target.value)} placeholder='Role (e.g., Friendly AI)' className=''/>
        <textarea  value={description} onChange={(e)=>setDes(e.target.value)} placeholder='Description' className='w-116 '/>
        <button type='submit' className='btn'>Create Persona</button>
       </form>
    </section>
  )
}

export default CreatePersona