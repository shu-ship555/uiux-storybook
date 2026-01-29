import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/atoms/Button"
import { Loader2, Mail } from "lucide-react"

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon"],
    },
    asChild: { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const Interactive: Story = {
  args: {
    children: "Hover & Click Me",
    className: "w-48",
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail /> Login with Email
      </>
    ),
  },
}

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Loader2 className="animate-spin" />
        Please wait
      </>
    ),
  },
}

export const CustomAnimation: Story = {
  args: {
    children: "Bouncy Animation",
    whileHover: { scale: 1.1, rotate: 2 },
    whileTap: { scale: 0.9, rotate: -2 },
    transition: { type: "spring", stiffness: 500, damping: 10 },
  },
}