import type { Meta, StoryObj } from "@storybook/react";

import RankingTabs from "./RankingTabs";

//DYLAN EST UN LOOSER
const sampleTournamentData = {
  roundList: [
    {
      round: [
        {
          nbWin: 0,
          nbLoose: 0,
          matches: [
            { team1: "Team Alpha", team2: "Team Beta", scoreTeam1: 3, scoreTeam2: 1 },
            { team1: "Team Gamma", team2: "Team Delta", scoreTeam1: 2, scoreTeam2: 3 },
            { team1: "Team Echo", team2: "Team Fox", scoreTeam1: 0, scoreTeam2: 3 },
            { team1: "Team Hydra", team2: "Team Joker", scoreTeam1: 3, scoreTeam2: 2 },
          ],
        },
      ],
    },
    {
      round: [
        {
          nbWin: 1,
          nbLoose: 0,
          matches: [
            { team1: "Team Alpha", team2: "Team Delta", scoreTeam1: 3, scoreTeam2: 2 },
            { team1: "Team Fox", team2: "Team Hydra", scoreTeam1: 1, scoreTeam2: 3 },
          ],
        },
        {
          nbWin: 0,
          nbLoose: 1,
          matches: [
            { team1: "Team Beta", team2: "Team Gamma", scoreTeam1: 2, scoreTeam2: 3 },
            { team1: "Team Echo", team2: "Team Joker", scoreTeam1: 3, scoreTeam2: 0 },
          ],
        },
      ],
    },
    {
      round: [
        {
          nbWin: 2,
          nbLoose: 0,
          matches: [
            { team1: "Team Alpha", team2: "Team Hydra", scoreTeam1: 2, scoreTeam2: 3 },
          ],
        },
        {
          nbWin: 1,
          nbLoose: 1,
          matches: [
            { team1: "Team Delta", team2: "Team Fox", scoreTeam1: 3, scoreTeam2: 1 },
            { team1: "Team Gamma", team2: "Team Echo", scoreTeam1: 1, scoreTeam2: 3 },
          ],
        },
        {
          nbWin: 0,
          nbLoose: 2,
          matches: [
            { team1: "Team Beta", team2: "Team Joker", scoreTeam1: 0, scoreTeam2: 3 },
          ],
        },
      ],
    },
  ],
};

const sampleRankingData = [
  { rank: 1, équipe: "Team Hydra", win: 3, loss: 0 },
  { rank: 2, équipe: "Team Alpha", win: 2, loss: 1 },
  { rank: 3, équipe: "Team Echo", win: 2, loss: 1 },
  { rank: 4, équipe: "Team Delta", win: 1, loss: 2 },
  { rank: 5, équipe: "Team Gamma", win: 1, loss: 2 },
  { rank: 6, équipe: "Team Joker", win: 1, loss: 2 },
  { rank: 7, équipe: "Team Fox", win: 1, loss: 2 },
  { rank: 8, équipe: "Team Beta", win: 0, loss: 3 },
];

const meta: Meta<typeof RankingTabs> = {
  title: "Components/RankingTabs",
  component: RankingTabs,
};

export default meta;
type Story = StoryObj<typeof RankingTabs>;

export const Default: Story = {
  args: {
    rankingData: sampleRankingData,
    tournamentData: sampleTournamentData,
  },
};
