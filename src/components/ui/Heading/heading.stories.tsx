import React from "react";

import { Heading } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Heading> = {
  title: "Ui/Heading",
  component: Heading,
  args: {
    children: "Heading",
    size: "default",
  },
  argTypes: {
    size: {
      options: [
        "sm",
        "default",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
      ],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  render: (args) => <Heading {...args} />,
};
