"use client"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import Logo from '@/public/images/Logo-Designs/BigyanLogo-Version1.png'

export function SquareCardCardPreview() {
  return (
    <Card className="bg-background rounded-3xl border-2 border-border p-4 hover:scale-105 transition duration-300 ease-in-out max-w-[200px]">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 relative mb-2">
          <Image src={Logo} alt="Logo" fill className="object-contain" />
        </div>
        <h1 className="text-sm font-semibold text-foreground mb-1 text-center">Bora is building a new platform.</h1>
        <p className="flex gap-1 text-xs text-muted-foreground items-center">
          <div className="bg-red-400 rounded-full p-0.5">
            <Heart className="h-3 w-3 text-primary-foreground" />
          </div>
          <span>
            <span className="font-medium">6,411</span> Supporters
          </span>
        </p>
      </div>
    </Card>
  )
}

