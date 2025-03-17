// components/card-previews/animated-button-card-preview.tsx
"use client"
import { useState } from "react"

export function AnimatedButtonCardPreview() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`cursor-pointer bg-[#e4c590] font-serif text-black w-36 h-10 tracking-wider text-center leading-10 relative overflow-hidden z-10 transition-all duration-500 ${isHovered ? 'text-white border border-[#e4c590]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Order Now
      {[0, 1, 2, 3].map((index) => (
        <span 
          key={index}
          style={{
            position: 'absolute',
            width: '25%',
            height: '100%',
            backgroundColor: 'black',
            borderRadius: '50%',
            left: `${index * 25}%`,
            transform: isHovered ? 'translateY(0) scale(150%)' : 'translateY(150%)',
            transition: 'transform 0.5s',
            transitionDelay: `${index * 100}ms`,
            zIndex: -1,
          }}
        />
      ))}
    </div>
  )
}