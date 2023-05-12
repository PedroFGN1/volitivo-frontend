import { Meta, StoryObj } from "@storybook/react";
import { Subjects } from ".";
import { Header } from "@/components/interface/header";
import { Footer } from "@/components/interface/footer";

const meta: Meta<typeof Subjects> = {
  title: "Pages/Subjects",
  component: Subjects,
};

export default meta;
type Story = StoryObj<typeof Subjects>;

export const Default: Story = {
  render: () => <Subjects />,
  decorators: [
    (Story) => (
      <>
        <Header />
        <Story />
        <Footer />
      </>
    ),
  ],
};
