import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "@/components/atoms/Label"
import { Input } from "@/components/atoms/Input"

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: "Label text",
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="example@email.com" />
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
