import * as React from "react";
import { AnimatePresence } from "framer-motion";
import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "@/components/atoms/Card";
import { Button } from "@/components/atoms/Button";
import type { AnimationPreset } from "@/components/animations/presets";

const meta: Meta<typeof Card> = {
  title: "Atoms/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    animation: {
      control: "select",
      options: ["none", "fadeIn", "slideUp", "hoverScale", "hoverLift", "tapPress"],
      description: "framer-motion アニメーション",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: { animation: "none" },
  render: (args) => (
    <Card className="w-80" animation={args.animation as AnimationPreset}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area.</p>
      </CardContent>
      <CardFooter>
        <Button variant="default">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const SlideUp: Story = {
  args: { animation: "slideUp" },
  render: (args) => (
    <Card className="w-80" animation={args.animation as AnimationPreset}>
      <CardHeader>
        <CardTitle>Slide up on mount</CardTitle>
        <CardDescription>マウント時にスライドインします。</CardDescription>
      </CardHeader>
      <CardContent>
        <p>slideUp アニメーション</p>
      </CardContent>
    </Card>
  ),
};

export const PageTransition: Story = {
  render: () => {
    const [visible, setVisible] = React.useState(true);
    return (
      <div className="flex flex-col items-center gap-6">
        <Button onClick={() => setVisible((v) => !v)} animation="tapPress">
          {visible ? "Hide card" : "Show card"}
        </Button>
        <AnimatePresence>
          {visible && (
            <Card className="w-80" animation="slideUp">
              <CardHeader>
                <CardTitle>Page Transition</CardTitle>
                <CardDescription>AnimatePresence による enter / exit アニメーション</CardDescription>
              </CardHeader>
              <CardContent>
                <p>ボタンでカードの表示・非表示を切り替えてください。</p>
              </CardContent>
            </Card>
          )}
        </AnimatePresence>
      </div>
    );
  },
};
