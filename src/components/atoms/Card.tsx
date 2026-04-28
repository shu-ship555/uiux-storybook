import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { animationPresets, type AnimationPreset } from "@/components/animations/presets"

type CardProps = React.ComponentProps<"div"> & {
  animation?: AnimationPreset
}

function Card({ className, animation = "none", ...props }: CardProps) {
  const motionProps = animationPresets[animation]
  return (
    <motion.div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...(motionProps as object)}
      {...(props as object)}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
