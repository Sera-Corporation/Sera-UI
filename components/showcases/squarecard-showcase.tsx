"use client"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import Logo from '@/public/images/Logo-Designs/BigyanLogo-Version1.png'

interface SquareCardProps {
  logoSrc: string
  title: string
  supporterCount: number
}

export function SquareCard({
  logoSrc = "/placeholder.svg?height=128&width=128",
  title = "Bora is building a new platform for artists.",
  supporterCount = 6411,
}: Partial<SquareCardProps>) {
  return (
    <Card className="bg-background rounded-3xl border-2 border-border p-8 hover:scale-105 transition duration-300 ease-in-out max-w-xs">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 relative mb-4">
          <Image src={Logo} alt="Logo" fill className="object-contain" />
        </div>
        <h1 className="text-xl font-semibold text-foreground mb-2 text-center">{title}</h1>
        <p className="flex gap-2 text-lg text-muted-foreground items-center">
          <div className="bg-red-400 rounded-full p-1">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span>
            <span className="font-medium">{supporterCount.toLocaleString()}</span> Supporters
          </span>
        </p>
      </div>
    </Card>
  )
}

export function SquareCardShowcase() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      <SquareCard
        logoSrc="/placeholder.svg?height=128&width=128"
        title="Bora is building a new platform for artists."
        supporterCount={6411}
      />

      <SquareCard
        logoSrc="/placeholder.svg?height=128&width=128"
        title="Join our community of creators."
        supporterCount={2845}
      />
    </div>
  )
}

