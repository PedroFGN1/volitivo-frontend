import React from "react";

import { Button } from ".";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Ui/Button",
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "destructive", "ghost", "link", "outline", "subtle"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["default", "sm", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
  },
  render: (args) => <Button {...args} />,
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "default",
  },
  render: (args) => <Button {...args} />,
};

export const Gost: Story = {
  args: {
    variant: "ghost",
    size: "default",
  },
  render: (args) => <Button {...args} />,
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "default",
  },
  render: (args) => <Button {...args} />,
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
  },
  render: (args) => <Button {...args} />,
};

export const Subtle: Story = {
  args: {
    variant: "subtle",
    size: "default",
  },
  render: (args) => <Button {...args} />,
};
