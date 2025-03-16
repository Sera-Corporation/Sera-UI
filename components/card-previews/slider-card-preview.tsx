import { Slider } from "@/components/ui/slider"

export function SliderCardPreview() {
  return (
    <div className="w-full max-w-[250px]">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  )
}

