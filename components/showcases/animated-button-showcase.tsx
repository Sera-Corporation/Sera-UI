// components/showcases/orderbtn-showcase.tsx
"use client"
import { useState } from "react"

export function AnimatedButtonShowcase() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Animated Circle Button</h3>
        <div className="flex flex-wrap gap-4">
          <AnimatedButton>Order Now</AnimatedButton>
          <AnimatedButton>Shop Now</AnimatedButton>
          <AnimatedButton>Learn More</AnimatedButton>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Usage Example</h3>
        <p className="text-sm text-muted-foreground">
          Hover over the button to see the animation effect.
        </p>
      </div>
    </div>
  )
}

function AnimatedButton({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`cursor-pointer bg-[#e4c590] font-serif text-black w-48 h-12 tracking-wider text-center leading-[3rem] relative overflow-hidden z-10 transition-all duration-500 ${isHovered ? 'text-white border border-[#e4c590]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
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