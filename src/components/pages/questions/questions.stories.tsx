import { Meta, StoryObj } from "@storybook/react";
import { Questions } from ".";
import { Header } from "@/components/interface/header";
import { Footer } from "@/components/interface/footer";

const meta: Meta<typeof Questions> = {
  title: "Pages/Questions",
  component: Questions,
};

export default meta;
type Story = StoryObj<typeof Questions>;

export const Default: Story = {
  render: () => <Questions />,
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
