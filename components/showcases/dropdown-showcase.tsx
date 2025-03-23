"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function DropdownShowcase() {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <AnimatedDropdown trigger="Select an option" options={["Option 1", "Option 2", "Option 3", "Option 4"]} />

      <AnimatedDropdown
        trigger="Select a color"
        options={["Red", "Green", "Blue", "Yellow", "Purple"]}
        variant="outline"
      />

      <AnimatedMultiSelect trigger="Select items" options={["Apple", "Banana", "Cherry", "Grape", "Orange"]} />
    </div>
  )
}

interface AnimatedDropdownProps {
  trigger: string
  options: string[]
  variant?: "default" | "outline"
}

function AnimatedDropdown({ trigger, options, variant = "default" }: AnimatedDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<string | null>(null)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative w-full max-w-[240px]" ref={dropdownRef}>
      <Button variant={variant} className="w-full justify-between" onClick={() => setIsOpen(!isOpen)}>
        <span>{selected || trigger}</span>
        {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-1 w-full rounded-md border bg-background shadow-lg"
          >
            <div className="py-1">
              {options.map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ backgroundColor: "rgba(var(--primary-rgb), 0.1)" }}
                  className={cn(
                    "flex w-full items-center px-4 py-2 text-left text-sm",
                    selected === option && "bg-primary/10 font-medium text-primary",
                  )}
                  onClick={() => {
                    setSelected(option)
                    setIsOpen(false)
                  }}
                >
                  {option}
                  {selected === option && <Check className="ml-auto h-4 w-4" />}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface AnimatedMultiSelectProps {
  trigger: string
  options: string[]
}

function AnimatedMultiSelect({ trigger, options }: AnimatedMultiSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<string[]>([])
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option))
    } else {
      setSelected([...selected, option])
    }
  }

  return (
    <div className="relative w-full max-w-[240px]" ref={dropdownRef}>
      <Button variant="default" className="w-full justify-between" onClick={() => setIsOpen(!isOpen)}>
        <span>{selected.length > 0 ? `${selected.length} selected` : trigger}</span>
        {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-1 w-full rounded-md border bg-background shadow-lg"
          >
            <div className="py-1">
              {options.map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ backgroundColor: "rgba(var(--primary-rgb), 0.1)" }}
                  className={cn(
                    "flex w-full items-center px-4 py-2 text-left text-sm",
                    selected.includes(option) && "bg-primary/10 font-medium text-primary",
                  )}
                  onClick={() => toggleOption(option)}
                >
                  {option}
                  {selected.includes(option) && <Check className="ml-auto h-4 w-4" />}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

