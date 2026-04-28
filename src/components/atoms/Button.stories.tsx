import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/atoms/Button";
import { Loader2, Mail } from "lucide-react";

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
    animation: {
      control: "select",
      options: ["none", "fadeIn", "slideUp", "tapPress"],
      description: "framer-motion アニメーション",
    },
    asChild: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    animation: "none",
  },
};

export const TapPress: Story = {
  args: {
    children: "Click me",
    animation: "tapPress",
  },
};

export const FadeIn: Story = {
  args: {
    children: "Fade in on mount",
    animation: "fadeIn",
  },
};

export const SlideUp: Story = {
  args: {
    children: "Slide up on mount",
    animation: "slideUp",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default" animation="none">
        Default
      </Button>
      <Button variant="secondary" animation="none">
        Secondary
      </Button>
      <Button variant="outline" animation="none">
        Outline
      </Button>
      <Button variant="destructive" animation="tapPress">
        Destructive
      </Button>
      <Button variant="ghost" animation="none">
        Ghost
      </Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    animation: "none",
    children: (
      <>
        <Mail /> Login with Email
      </>
    ),
  },
};

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
};
