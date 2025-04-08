import { Meta, StoryObj } from "@storybook/react";
import Ranking from "./Ranking";

const meta: Meta<typeof Ranking> = {
  title: "Components/Ranking",
  component: Ranking
};

export default meta;

type Story = StoryObj<typeof Ranking>;

const fakeData = [
  {
    rank: 1,
    équipe: "Les top 1",
    win: 11,
    loss: 0
  },
  {
    rank: 2,
    équipe: "Les top 2",
    win: 10,
    loss: 1
  },
  {
    rank: 3,
    équipe: "Les top 3",
    win: 9,
    loss: 2
  },
  {
    rank: 4,
    équipe: "Les top 4",
    win: 8,
    loss: 3
  },
  {
    rank: 5,
    équipe: "Les top 5",
    win: 7,
    loss: 4
  }
];

export const Default: Story = {
  args: {
    ranks: fakeData
  }
};
