"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function NotificationsShowcase() {
  const { toast } = useToast()

  const showSuccessToast = () => {
    toast({
      title: "Success!",
      description: "Your action was completed successfully.",
      variant: "default",
    })
  }

  const showErrorToast = () => {
    toast({
      title: "Error!",
      description: "There was a problem with your request.",
      variant: "destructive",
    })
  }

  const showInfoToast = () => {
    toast({
      title: "Information",
      description: "Here's some information you might find useful.",
    })
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Toast Notifications</h3>
        <div className="flex flex-wrap gap-4">
          <Button onClick={showSuccessToast}>Show Success Toast</Button>
          <Button onClick={showErrorToast} variant="destructive">
            Show Error Toast
          </Button>
          <Button onClick={showInfoToast} variant="outline">
            Show Info Toast
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">In-App Notifications</h3>
        <InAppNotifications />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Notification Examples</h3>
        <div className="space-y-4">
          <Notification
            type="success"
            title="Payment successful"
            description="Your payment has been processed successfully."
          />
          <Notification
            type="error"
            title="Payment failed"
            description="There was an issue processing your payment. Please try again."
          />
          <Notification type="info" title="New feature available" description="Check out our new dashboard features." />
          <Notification
            type="warning"
            title="Account expiring soon"
            description="Your subscription will expire in 3 days."
          />
        </div>
      </div>
    </div>
  )
}

function InAppNotifications() {
  const [notifications, setNotifications] = React.useState<
    {
      id: string
      type: "success" | "error" | "info" | "warning"
      title: string
      description: string
    }[]
  >([])

  const addNotification = (type: "success" | "error" | "info" | "warning") => {
    const id = Math.random().toString(36).substring(2, 9)
    const newNotification = {
      id,
      type,
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Notification`,
      description: `This is a ${type} notification example.`,
    }

    setNotifications((prev) => [...prev, newNotification])

    // Auto remove after 5 seconds
    setTimeout(() => {
      removeNotification(id)
    }, 5000)
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Button onClick={() => addNotification("success")} variant="default">
          Add Success
        </Button>
        <Button onClick={() => addNotification("error")} variant="destructive">
          Add Error
        </Button>
        <Button onClick={() => addNotification("info")} variant="outline">
          Add Info
        </Button>
        <Button onClick={() => addNotification("warning")} variant="secondary">
          Add Warning
        </Button>
      </div>

      <div className="fixed bottom-4 right-4 z-50 flex max-h-[calc(100vh-2rem)] w-full max-w-sm flex-col gap-2 overflow-hidden">
        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              className="overflow-hidden rounded-lg border bg-background p-4 shadow-lg"
            >
              <Notification
                type={notification.type}
                title={notification.title}
                description={notification.description}
                onClose={() => removeNotification(notification.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

interface NotificationProps {
  type: "success" | "error" | "info" | "warning"
  title: string
  description: string
  onClose?: () => void
}

function Notification({ type, title, description, onClose }: NotificationProps) {
  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    error: <AlertCircle className="h-5 w-5 text-red-500" />,
    info: <Info className="h-5 w-5 text-blue-500" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-500" />,
  }

  const borders = {
    success: "border-l-4 border-l-green-500",
    error: "border-l-4 border-l-red-500",
    info: "border-l-4 border-l-blue-500",
    warning: "border-l-4 border-l-amber-500",
  }

  return (
    <div className={cn("flex items-start gap-4 rounded-md bg-background p-4", borders[type])}>
      <div className="mt-0.5">{icons[type]}</div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      )}
    </div>
  )
}

