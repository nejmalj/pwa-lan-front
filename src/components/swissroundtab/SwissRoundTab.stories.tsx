import type { Meta, StoryObj } from "@storybook/react";
import SwissRoundTab from "./SwissRoundTab.tsx";
import { SwissRoundTabProps } from "./SwissRoundTab.tsx";

export default {
  title: "Components/SwissRoundTab",
  component: SwissRoundTab,
  tags: ["autodocs"]
} as Meta<typeof SwissRoundTab>;

type Story = StoryObj<SwissRoundTabProps>;

const sampleData: SwissRoundTabProps = {
  teamAndScores: [
    {
      teamName: "Les Aigles",
      gamesHistory: [
        { opponent: "Les Lions", result: "win" },
        { opponent: "Les Renards", result: "lose" },
        { opponent: "Les Ours", result: "win" },
        { opponent: "Les Loups", result: "win" },
        { opponent: "Les Panthères", result: "win" }
      ]
    },
    {
      teamName: "Les Renards",
      gamesHistory: [
        { opponent: "Les Ours", result: "win" },
        { opponent: "Les Aigles", result: "win" },
        { opponent: "Les Lions", result: "lose" },
        { opponent: "Les Loups", result: "lose" },
        { opponent: "Les Panthères", result: "win" }
      ]
    },
    {
      teamName: "Les Lions",
      gamesHistory: [
        { opponent: "Les Aigles", result: "lose" },
        { opponent: "Les Ours", result: "win" },
        { opponent: "Les Renards", result: "lose" },
        { opponent: "Les Loups", result: "win" },
        { opponent: "Les Panthères", result: "lose" }
      ]
    }
  ]
};

export const Default: Story = {
  args: sampleData
};

export const Empty: Story = {
  args: {
    teamAndScores: []
  }
};

export const SingleTeam: Story = {
  args: {
    teamAndScores: [
      {
        teamName: "Les Aigles",
        gamesHistory: [
          { opponent: "Les Lions", result: "win" },
          { opponent: "Les Renards", result: "win" }
        ]
      }
    ]
  }
};
