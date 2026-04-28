import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "@/components/atoms/Label"
import { Input } from "@/components/atoms/Input"

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    animation: {
      control: "select",
      options: ["none", "fadeIn", "slideUp", "hoverScale", "hoverLift", "tapPress"],
      description: "framer-motion アニメーション",
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: "Label text",
    animation: "none",
  },
}

export const FadeIn: Story = {
  args: {
    children: "Fade in on mount",
    animation: "fadeIn",
  },
}

export const SlideUp: Story = {
  args: {
    children: "Slide up on mount",
    animation: "slideUp",
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email" animation="fadeIn">Email</Label>
      <Input id="email" type="email" placeholder="example@email.com" animation="fadeIn" />
    </div>
  ),
}

export const WithDisabledInput: Story = {
  render: () => (
    <div className="group flex flex-col gap-2" data-disabled="true">
      <Label htmlFor="disabled-input">Disabled field</Label>
      <Input id="disabled-input" type="text" placeholder="Disabled" disabled />
    </div>
  ),
}
