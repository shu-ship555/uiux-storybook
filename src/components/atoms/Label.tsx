import * as React from "react"
import { motion } from "framer-motion"
import { Label as BaseLabel } from "@/components/ui/label"
import { animationPresets, type AnimationPreset } from "@/components/animations/presets"

const MotionLabel = motion.create(BaseLabel)

type LabelProps = React.ComponentProps<typeof BaseLabel> & {
  animation?: AnimationPreset
}

function Label({ animation = "none", ...props }: LabelProps) {
  const motionProps = animationPresets[animation]
  return <MotionLabel {...(motionProps as object)} {...(props as object)} />
}

export { Label }
