import type { Meta, StoryObj } from "@storybook/react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/atoms/Carousel"

const meta: Meta<typeof Carousel> = {
  title: "Atoms/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: () => (
    <div className="flex justify-center px-16">
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, i) => (
            <CarouselItem key={i}>
              <div className="flex h-40 items-center justify-center rounded-lg border bg-muted text-2xl font-semibold">
                {i + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const MultipleItems: Story = {
  render: () => (
    <div className="flex justify-center px-16">
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, i) => (
            <CarouselItem key={i} className="basis-1/3">
              <div className="flex h-24 items-center justify-center rounded-lg border bg-muted font-semibold">
                {i + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex justify-center py-16">
      <Carousel orientation="vertical" className="w-full max-w-xs">
        <CarouselContent className="h-48">
          {Array.from({ length: 5 }).map((_, i) => (
            <CarouselItem key={i}>
              <div className="flex h-full items-center justify-center rounded-lg border bg-muted text-2xl font-semibold">
                {i + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}
