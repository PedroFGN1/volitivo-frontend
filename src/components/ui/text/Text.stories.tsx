import React from "react";

import { Text } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  title: "Ui/Text",
  component: Text,
  args: {
    children: "Text",
    size: "default",
  },
  argTypes: {
    size: {
      options: ["sm", "default", "lg", "xl"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (args) => <Text {...args} />,
};
