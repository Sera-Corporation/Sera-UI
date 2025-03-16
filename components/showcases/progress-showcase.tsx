"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function ProgressShowcase() {
  const [progress, setProgress] = React.useState(0)
  const [loading, setLoading] = React.useState(false)
  const [indeterminate, setIndeterminate] = React.useState(false)

  React.useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            setLoading(false)
            return 100
          }
          return prevProgress + 10
        })
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [progress, loading])

  const startLoading = () => {
    setProgress(0)
    setLoading(true)
  }

  const toggleIndeterminate = () => {
    setIndeterminate(!indeterminate)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Standard Progress Bar</h3>
        <Progress value={progress} className="w-full" />
        <div className="flex gap-4">
          <Button onClick={startLoading} disabled={loading}>
            {loading ? "Loading..." : "Start Progress"}
          </Button>
          <Button variant="outline" onClick={() => setProgress(0)}>
            Reset
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Indeterminate Progress</h3>
        <IndeterminateProgress active={indeterminate} />
        <Button onClick={toggleIndeterminate}>{indeterminate ? "Stop" : "Start"} Indeterminate</Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Colored Progress Bars</h3>
        <div className="space-y-2">
          <Progress value={25} className="w-full bg-blue-100 dark:bg-blue-950">
            <div className="h-full w-full bg-blue-500 transition-all" style={{ width: "25%" }} />
          </Progress>
          <Progress value={50} className="w-full bg-green-100 dark:bg-green-950">
            <div className="h-full w-full bg-green-500 transition-all" style={{ width: "50%" }} />
          </Progress>
          <Progress value={75} className="w-full bg-amber-100 dark:bg-amber-950">
            <div className="h-full w-full bg-amber-500 transition-all" style={{ width: "75%" }} />
          </Progress>
          <Progress value={100} className="w-full bg-purple-100 dark:bg-purple-950">
            <div className="h-full w-full bg-purple-500 transition-all" style={{ width: "100%" }} />
          </Progress>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Circular Progress</h3>
        <div className="flex flex-wrap gap-8">
          <CircularProgress value={25} size={80} strokeWidth={8} />
          <CircularProgress value={50} size={80} strokeWidth={8} />
          <CircularProgress value={75} size={80} strokeWidth={8} />
          <CircularProgress value={100} size={80} strokeWidth={8} />
        </div>
      </div>
    </div>
  )
}

interface IndeterminateProgressProps {
  active: boolean
}

function IndeterminateProgress({ active }: IndeterminateProgressProps) {
  return (
    <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
      {active && (
        <motion.div
          className="absolute h-full bg-primary"
          initial={{ x: "-100%", width: "50%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "linear",
          }}
        />
      )}
    </div>
  )
}

interface CircularProgressProps {
  value: number
  size: number
  strokeWidth: number
}

function CircularProgress({ value, size, strokeWidth }: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle className="stroke-muted" cx={size / 2} cy={size / 2} r={radius} fill="none" strokeWidth={strokeWidth} />
        <circle
          className="stroke-primary"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute text-sm font-medium">{value}%</div>
    </div>
  )
}

