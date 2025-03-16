'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ArrowRight, Copy, Moon, Accessibility, Paintbrush, Code, Github, Eye, Clipboard, Palette, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/feature-card";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  
  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Track mouse position for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  // Track mouse position for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  // Track scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Cycle through features in the hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % 6);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    { title: "No Installation", icon: <Copy className="h-6 w-6" /> },
    { title: "Dark Mode", icon: <Moon className="h-6 w-6" /> },
    { title: "Accessible", icon: <Accessibility className="h-6 w-6" /> },
    { title: "Customizable", icon: <Paintbrush className="h-6 w-6" /> },
    { title: "Pure Tailwind", icon: <Code className="h-6 w-6" /> },
  ];

  return (
    <div className="flex-1 overflow-hidden">
      {/* Floating interactive shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute rounded-full bg-primary/10 blur-3xl" 
          style={{ 
            width: '40vw', 
            height: '40vw', 
            left: `${mousePosition.x * 0.05}px`, 
            top: `${mousePosition.y * 0.05}px`, 
            opacity: 0.6,
            transition: 'left 4s ease, top 4s ease',
          }}
        />
        <div 
          className="absolute rounded-full bg-secondary/10 blur-3xl" 
          style={{ 
            width: '30vw', 
            height: '30vw', 
            right: `${mousePosition.x * 0.03}px`, 
            bottom: `${mousePosition.y * 0.03}px`, 
            opacity: 0.5,
            transition: 'right 3s ease, bottom 3s ease',
          }}
        />
      </div>

      {/* Hero section with 3D perspective and interactive elements */}
      <section className="relative min-h-screen overflow-hidden py-16 md:py-24 lg:py-32">
        <div 
          className="container relative z-10 flex flex-col items-center"
          style={{ 
            perspective: '1000px',
            transformStyle: 'preserve-3d' 
          }}
        >
          {/* Floating version badge */}
          <div 
            className="absolute -top-6 left-1/2 -translate-x-1/2 animate-bounce md:top-12"
            style={{ 
              animation: 'float 6s ease-in-out infinite',
              transform: `translateZ(${20 + scrollProgress * 50}px)` 
            }}
          >
            <Link href="/releases/v1.4" className="rounded-full bg-primary/20 px-6 py-2 text-sm font-medium backdrop-blur-sm">
              🚀 Version 1.4
            </Link>
          </div>

          {/* Main heading with 3D effect */}
          <div 
            className="mt-16 md:mt-24"
            style={{ 
              transform: `translateZ(${50 - scrollProgress * 100}px) rotateX(${scrollProgress * 10}deg)`,
              opacity: 1 - scrollProgress * 0.8
            }}
          >
            <h1 className="font-heading text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Modern UI</span>
              <br /> components with 
              <br /> Tailwind CSS
            </h1>
          </div>
          
          {/* Feature spotlight carousel */}
          <div className="mt-12 flex h-24 items-center justify-center">
            <div className="relative flex items-center justify-center">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`absolute flex items-center transition-all duration-500 ${
                    index === activeFeatureIndex ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  <div className="flex items-center gap-3 rounded-lg bg-muted/50 px-6 py-3 backdrop-blur-sm">
                    {feature.icon}
                    <span className="text-lg font-semibold">{feature.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 max-w-[42rem] text-center text-lg leading-relaxed text-muted-foreground">
            SeraUI is a beautifully designed component library that helps developers 
            build clean, accessible, and customizable interfaces with just Tailwind CSS.
          </p>
          
          {/* Interactive buttons that float and react to mouse */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="relative overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '0 0 20px rgba(var(--primary), 0.3)',
              }}
            >
              <Link href="/components" className="relative z-10">
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4" />
                <span className="absolute inset-0 -z-10 bg-primary/20 blur-md" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Link href="/docs">Documentation</Link>
            </Button>
          </div>
        </div>

        {/* Floating code snippets */}
        <div className="pointer-events-none absolute -left-10 top-1/4 z-0 hidden rotate-12 opacity-20 lg:block">
          <pre className="rounded bg-muted/30 p-4 backdrop-blur-sm"><code>{`.btn-primary {
  @apply bg-primary text-white
  rounded-md px-4 py-2;
}`}</code></pre>
        </div>
        <div className="pointer-events-none absolute -right-10 bottom-1/4 z-0 hidden -rotate-12 opacity-20 lg:block">
          <pre className="rounded bg-muted/30 p-4 backdrop-blur-sm"><code>{`<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
</Card>`}</code></pre>
        </div>
      </section>

      {/* Features section with scroll-driven animations */}
      <section className="container relative py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
            style={{ transform: `translateY(${scrollProgress * 100}px)` }} 
          />
          <div 
            className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"
            style={{ transform: `translateY(${-scrollProgress * 150}px)` }} 
          />
        </div>

        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 
            className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            style={{ 
              opacity: Math.min(1, scrollProgress * 5),
              transform: `translateY(${Math.max(0, 50 - scrollProgress * 200)}px)`
            }}
          >
            Features
          </h2>
          <p className="max-w-[85%] text-muted-foreground">
            SeraUI comes packed with features to help you build beautiful interfaces quickly and efficiently.
          </p>
        </div>

        <div 
          className="mx-auto mt-12 grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-5"
          style={{ 
            opacity: Math.min(1, scrollProgress * 3),
            transform: `translateY(${Math.max(0, 100 - scrollProgress * 300)}px)`
          }}
        >
          <FeatureCard
            title="No Installation Required"
            description="Just copy and paste the Tailwind CSS code into your project."
            icon="Copy"
            className="backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
          />
          <FeatureCard
            title="Dark Mode Ready"
            description="Built-in dark mode support with seamless transitions."
            icon="Moon"
            className="backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
          />
          <FeatureCard
            title="Accessible"
            description="Components follow WAI-ARIA guidelines for maximum accessibility."
            icon="Accessibility"
            className="backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
          />
          <FeatureCard
            title="Customizable"
            description="Easily customize components to match your brand."
            icon="Paintbrush"
            className="backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
          />
          <FeatureCard
            title="Pure Tailwind CSS"
            description="No dependencies, just Tailwind CSS classes you can use anywhere."
            icon="Code"
            className="backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
          />
        </div>
      </section>

      {/* New features section with staggered reveal */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-muted/20" />
        
        <div className="container">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <span className="inline-block animate-pulse rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              New in Version 1.4
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Enhanced Component Browsing & Theming
            </h2>
            <p className="max-w-[85%] text-muted-foreground">
              Version 1.4 brings significant improvements to component browsing and adds exciting new theme options.
            </p>
          </div>

          <div className="mx-auto mt-16 grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {[
              {
                title: "Live Component Previews",
                description: "See actual component previews directly in the component cards.",
                icon: "Eye"
              },
              {
                title: "Enhanced Copy Experience",
                description: "Improved copy functionality with helpful tooltips and visual feedback.",
                icon: "Clipboard"
              },
              {
                title: "New Theme Options",
                description: "Choose from several new beautiful color themes for your interface.",
                icon: "Palette"
              },
              {
                title: "Pure Tailwind Code",
                description: "Get ready-to-use Tailwind CSS code that works in any project.",
                icon: "Code"
              },
              {
                title: "No Dependencies",
                description: "No need to install any packages or libraries.",
                icon: "Package"
              },
              {
                title: "Copy & Paste",
                description: "Just copy the code and paste it into your project.",
                icon: "Copy"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="transform transition-all duration-700"
                style={{ 
                  opacity: Math.min(1, Math.max(0, (scrollProgress * 3) - (index * 0.1))),
                  transform: `translateY(${Math.max(0, 100 - scrollProgress * 300)}px) 
                              rotate(${Math.max(0, 5 - scrollProgress * 20)}deg)`
                }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  className="relative overflow-hidden bg-gradient-to-br from-background to-muted backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                />
              </div>
            ))}
                    </div>

<div className="mt-16 flex justify-center">
  <Button 
    asChild 
    size="lg"
    className="relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
  >
    <Link href="/components" className="z-10">
      Explore Components
      <ArrowRight className="ml-2 h-4 w-4" />
      <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-secondary/20 blur-md" />
    </Link>
  </Button>
</div>
</div>
</section>

{/* Call to action with floating elements */}
<section className="relative overflow-hidden py-16 md:py-24">
<div 
  className="container relative z-10 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center backdrop-blur-sm md:p-16"
  style={{ 
    transformStyle: 'preserve-3d'
  }}
>
  <div 
    className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
    style={{ transform: `translateZ(-10px)` }}
  />
  <div 
    className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
    style={{ transform: `translateZ(-10px)` }}
  />
  
  <div className="relative">
    <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
      Start Building Beautiful UIs Today
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
      Join thousands of developers using SeraUI to create stunning interfaces with minimal effort.
    </p>
    
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Button 
        asChild 
        size="lg" 
        className="relative overflow-hidden transition-all duration-300 hover:scale-105"
      >
        <Link href="/components">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
          <span className="absolute inset-0 -z-10 bg-primary/20 blur-sm" />
        </Link>
      </Button>
      <Button 
        variant="outline" 
        size="lg" 
        asChild 
        className="backdrop-blur-sm transition-all duration-300 hover:scale-105"
      >
        <Link href="/docs">Read Documentation</Link>
      </Button>
    </div>
    
    {/* Floating icons */}
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {[
        { icon: <Copy />, x: '10%', y: '20%', delay: 0 },
        { icon: <Moon />, x: '85%', y: '15%', delay: 1 },
        { icon: <Code />, x: '75%', y: '80%', delay: 2 },
        { icon: <Paintbrush />, x: '15%', y: '85%', delay: 3 },
        { icon: <Eye />, x: '50%', y: '10%', delay: 4 },
        { icon: <Github />, x: '25%', y: '50%', delay: 5 }
      ].map((item, index) => (
        <div 
          key={index}
          className="absolute text-primary/20"
          style={{ 
            left: item.x, 
            top: item.y,
            animation: `float 6s ease-in-out ${item.delay}s infinite`,
            transform: 'scale(2)'
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  </div>
</div>
</section>

{/* Floating animation keyframes */}
<style jsx global>{`
@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}
`}</style>
</div>
);
}
          