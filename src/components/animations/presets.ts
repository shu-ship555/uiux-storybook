import type { MotionProps } from "framer-motion"

export type AnimationPreset = "none" | "fadeIn" | "slideUp" | "tapPress"

export const animationPresets: Record<AnimationPreset, Partial<MotionProps>> = {
  none: {},
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: "easeOut" },
  },
  tapPress: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
}
