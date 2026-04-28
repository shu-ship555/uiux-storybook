import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "@/components/atoms/Input"

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "file"],
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    animation: {
      control: "select",
      options: ["none", "fadeIn", "slideUp", "hoverScale", "hoverLift", "tapPress"],
      description: "framer-motion アニメーション",
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
    animation: "none",
  },
}

export const FadeIn: Story = {
  args: {
    type: "text",
    placeholder: "Fade in on mount...",
    animation: "fadeIn",
  },
}

export const SlideUp: Story = {
  args: {
    type: "text",
    placeholder: "Slide up on mount...",
    animation: "slideUp",
  },
}

export const HoverScale: Story = {
  args: {
    type: "text",
    placeholder: "Hover to scale...",
    animation: "hoverScale",
  },
}

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "example@email.com",
    animation: "none",
  },
}

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
    animation: "none",
  },
}

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Disabled input",
    disabled: true,
    animation: "none",
  },
}
