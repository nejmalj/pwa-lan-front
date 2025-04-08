import type { Meta, StoryObj } from "@storybook/react";

import IconText from "./IconText";

const meta: Meta<typeof IconText> = {
  component: IconText,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<typeof IconText>;

export const Trophy: Story = {
  args: {
    Icon: () => <img src="/trophy.png" />,
    label: "Convivialité et compétition"
  }
};

export const User: Story = {
  args: {
    Icon: () => <img src="/user.png" />,
    label: "MyDigitalSchool"
  }
};

export const Clock: Story = {
  args: {
    Icon: () => <img src="/clock.png" />,
    label: "10h00"
  }
};

export const Calendar: Story = {
  args: {
    Icon: () => <img src="/calendar.png" />,
    label: "25 mai"
  }
};
