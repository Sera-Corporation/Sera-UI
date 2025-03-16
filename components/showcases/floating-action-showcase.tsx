"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Edit, Trash, Share, Download, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function FloatingActionShowcase() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Basic Floating Action Button</h3>
        <div className="relative h-64 rounded-lg border bg-muted/30 p-4">
          <div className="absolute bottom-4 right-4">
            <Button size="icon" className="h-14 w-14 rounded-full shadow-lg">
              <Plus className="h-6 w-6" />
              <span className="sr-only">Add item</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Expandable FAB</h3>
        <div className="relative h-64 rounded-lg border bg-muted/30 p-4">
          <ExpandableFAB />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">FAB with Label</h3>
        <div className="relative h-64 rounded-lg border bg-muted/30 p-4">
          <div className="absolute bottom-4 right-4">
            <Button className="rounded-full shadow-lg">
              <Plus className="mr-2 h-4 w-4" />
              Create New
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Custom Styled FAB</h3>
        <div className="relative h-64 rounded-lg border bg-muted/30 p-4">
          <div className="absolute bottom-4 right-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
            >
              <Plus className="h-6 w-6" />
              <span className="sr-only">Add item</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ExpandableFAB() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  const fabVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 45,
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: (i: number) => ({
      opacity: 1,
      y: -i * 60,
      transition: {
        delay: i * 0.05,
      },
    }),
  }

  const actions = [
    { icon: <Edit className="h-4 w-4" />, label: "Edit", color: "bg-blue-500" },
    { icon: <Trash className="h-4 w-4" />, label: "Delete", color: "bg-red-500" },
    { icon: <Share className="h-4 w-4" />, label: "Share", color: "bg-green-500" },
    { icon: <Download className="h-4 w-4" />, label: "Download", color: "bg-purple-500" },
  ]

  return (
    <div className="absolute bottom-4 right-4">
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col items-end space-y-2">
            {actions.map((action, i) => (
              <motion.div
                key={i}
                custom={actions.length - i}
                variants={itemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex items-center gap-2"
              >
                <span className="rounded-full bg-background px-2 py-1 text-xs font-medium shadow">{action.label}</span>
                <button
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md",
                    action.color,
                  )}
                >
                  {action.icon}
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.button
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
        onClick={toggleOpen}
        variants={fabVariants}
        animate={isOpen ? "open" : "closed"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
      </motion.button>
    </div>
  )
}

