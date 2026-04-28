import * as React from "react"
import { motion } from "framer-motion"
import { Slot } from "@radix-ui/react-slot"
import type { VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { animationPresets, type AnimationPreset } from "@/components/animations/presets"

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    animation?: AnimationPreset
  }

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  animation = "none",
  ...props
}: ButtonProps) {
  const motionProps = animationPresets[animation]

  if (asChild) {
    return (
      <Slot
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }

  return (
    <motion.button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...(motionProps as object)}
      {...(props as object)}
    />
  )
}

export { Button, buttonVariants }
