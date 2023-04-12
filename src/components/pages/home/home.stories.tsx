import { Meta, StoryObj } from "@storybook/react";
import { Home } from ".";
import { Header } from "@/components/interface/header";
import { Footer } from "@/components/interface/footer";

const meta: Meta<typeof Home> = {
  title: "Pages/Home",
  component: Home,
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {
  render: () => <Home />,
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
