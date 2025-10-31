import React, { useEffect, useRef, useState } from "react";
import { useStore } from "../store/useStore";
import axios from "axios";

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [chat, setchat] = useState([]);
  const { selectedPersona } = useStore();
  const chatBoxRef = useRef(null);
  const [MenuOpId, setMenuOpId] = useState(null)

  useEffect(() => {
    chatBoxRef.current.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chat]);

  useEffect(() => {
    if (!selectedPersona) {
      setchat([]);
      return;
    }

    setchat([{ text: "loading persona....", sender: "system" }]);

    const timer = setTimeout(() => {
      setchat([
        {
          text: `hey I'm ${selectedPersona.name} your ${selectedPersona.role} . ${selectedPersona.description}`,
          sender: selectedPersona.name,
        },
      ]);
    }, 1500);

    return () => clearTimeout(timer);
  }, [selectedPersona]);



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!msg.trim()) return;
    if(!selectedPersona){
      alert("Please select a persona first!")
      return;
    }

    setchat((prev) => [...prev, { id:Date.now(),text: msg, sender: "you" },    ]);
    try{
      
      const res=await axios.post("https://ai-forge-webs.onrender.com/chat/prompt",{
        prompt:msg,
        personaName:selectedPersona.name

      })

      const aiMsg=res.data.message;

      setchat((prev)=>[
        ...prev,
        {
          id:Date.now(),
           text:aiMsg,
        sender:selectedPersona.name
        }
       
      ])

    }catch (err){
      console.error(err)
      setchat((prev)=>[
        ...prev,
        {
          text:"something went wrong",
        sender:"system"
        }
        
      ])

    }
    setMsg("");
  };

  const handleDelete=(id)=>{
    setchat((prev)=>prev.filter((msg)=>msg.id !== id))
    setMenuOpId(null)

  }

  return (
    <section className="p-10 relative h-full w-full flex gap-5 flex-col items-center ">
      <h1 className="top-20 ">
        {" "}
        {selectedPersona
          ? `Your Talking with ${selectedPersona.name}`
          : "you didnt select any one"}{" "}
      </h1>

      <div
        ref={chatBoxRef}
        className=" h-168 overflow-y-auto relative gap-5  w-full  flex flex-col items-center  "
      >
        {chat.map((m) => (
          <div
            key={m.id}
            className={` flex lg:w-1/3 md:w-1/2  ${
              m.sender === "you" ? "justify-end " : "justify-start"
            } `}
          >
            <div
              className={`px-4 p-2 rounded-2xl  ${
                m.sender === "you"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-700 text-white rounded-bl-none"
              }`}
            >
              <p className="text-sm font-semibold">{m.sender}</p>
              <p>{m.text}</p>

              {m.sender==="you" &&(
                <div className="pl-[90%]">
                  <button
                  onClick={()=>handleDelete(m.id)}
                  > 🗑️</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {selectedPersona ? (
        <form action="" onSubmit={handleSubmit} className="bottom-20 ">
          <input
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button className="btn ">send</button>
        </form>
      ) : (
        <p></p>
      )}
    </section>
  );
};

export default Chat;
