import React, { useEffect, useState } from 'react'

export default function ScrollToTop() {
    const [isVisible,setIsvisible] = useState(false)

    useEffect(()=>{
        const handlertoScroll = ()=>{
        if(window.scrollY>300){
            setIsvisible(true)
        }else{
            setIsvisible(false)
        }
    }
    window.addEventListener('scroll',handlertoScroll)
    return ()=>{
        window.removeEventListener('scroll',handlertoScroll)
    }
    })

    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    
  return (
   isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          padding: "10px 15px",
          fontSize: "16px",
          borderRadius: "5px",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          zIndex: 999
        }}
      >
        ↑ Top
      </button>
    )
  )
}
