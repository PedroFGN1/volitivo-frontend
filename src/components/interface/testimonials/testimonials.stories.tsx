import { Meta, StoryObj } from "@storybook/react";
import { Testimonials } from ".";

const meta: Meta<typeof Testimonials> = {
  title: "Interface/Testimonials",
  component: Testimonials,
};

export default meta;
type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {
  render: () => <Testimonials />,
};
