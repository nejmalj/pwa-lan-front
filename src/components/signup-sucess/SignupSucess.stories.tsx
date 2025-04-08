import { Meta, StoryObj } from "@storybook/react";
import SignupSucess from "./SignupSucess";

const meta: Meta<typeof SignupSucess> = {
  title: "Components/SignupSucess",
  component: SignupSucess
};

export default meta;

type Story = StoryObj<typeof SignupSucess>;

export const Default: Story = {
  render: () => <SignupSucess />
};
