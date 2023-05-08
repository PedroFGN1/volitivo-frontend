import { Meta, StoryObj } from "@storybook/react";
import { Table } from ".";

const meta: Meta<typeof Table> = {
  title: "Interface/table",
  component: Table,
};

const lists = [
  {id: 1, name:"Raciocínio Lógico", questions: 678, comments: 46 },
  {id: 1, name:"História do Brasil", questions: 345, comments: 18 },
]

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => <Table lists={lists}></Table>,
};
