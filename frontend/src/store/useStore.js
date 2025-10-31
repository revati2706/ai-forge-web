// src/store/useStore.js
import { create } from "zustand";
import axios from "axios";

export const useStore = create((set,get) => ({
  personas: [],
  searchPersona:"",
  filteredPersona:[],

  fetchPersonas: async () => {
    try {
      const res = await axios.get("http://localhost:5000/personas");
      set({ personas: res.data,filteredPersona:res.data });
    } catch (err) {
      console.error("Error fetching personas:", err);
    }
  },

  addPersona: async (persona) => {
    try {
      const res = await axios.post("http://localhost:5000/personas", persona);
      set((state) => ({
        personas: [...state.personas, res.data],

      }));
    } catch (err) {
      console.error("Error adding persona:", err);
    }
  },

  selectedPersona: null,

  selectPersona: (persona) => set({ selectedPersona: persona }),
  
  setSearchPersona:(name)=>{
    set({searchPersona:name})
    const {personas}=get()
    const filtered=personas.filter((i)=>
   ( i.name.toLowerCase().includes(name.toLowerCase()) || name==="")
    )
    set({filteredPersona:filtered})
  }



}));

