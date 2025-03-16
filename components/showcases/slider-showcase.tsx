"use client"

import * as React from "react"

import { Slider } from "@/components/ui/slider"

export function SliderShowcase() {
  const [value, setValue] = React.useState([50])
  const [rangeValue, setRangeValue] = React.useState([25, 75])

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h4 className="font-medium">Single Slider: {value}</h4>
        <Slider defaultValue={[50]} max={100} step={1} value={value} onValueChange={setValue} />
      </div>

      <div className="space-y-2">
        <h4 className="font-medium">
          Range Slider: {rangeValue[0]} - {rangeValue[1]}
        </h4>
        <Slider defaultValue={[25, 75]} max={100} step={1} value={rangeValue} onValueChange={setRangeValue} />
      </div>
    </div>
  )
}

