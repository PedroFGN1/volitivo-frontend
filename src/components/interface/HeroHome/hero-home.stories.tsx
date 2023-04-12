import { Meta, StoryObj } from "@storybook/react";
import { HeroHome } from ".";

const meta: Meta<typeof HeroHome> = {
  title: "Interface/HeroHome",
  component: HeroHome,
};

export default meta;
type Story = StoryObj<typeof HeroHome>;

export const Default: Story = {
  render: () => <HeroHome />,
};
