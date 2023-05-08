import { Meta, StoryObj } from "@storybook/react";
import { ElementHome } from ".";

const meta: Meta<typeof ElementHome> = {
  title: "Interface/ElementHome",
  component: ElementHome,
};

export default meta;
type Story = StoryObj<typeof ElementHome>;

export const Default: Story = {
  render: () => <ElementHome />,
};
