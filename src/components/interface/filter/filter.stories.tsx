import { Meta, StoryObj } from "@storybook/react";
import { Filter } from ".";

const meta: Meta<typeof Filter> = {
  title: "Interface/filter",
  component: Filter,
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  render: () => <Filter />,
};
