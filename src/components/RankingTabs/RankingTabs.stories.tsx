import type { Meta, StoryObj } from "@storybook/react";

import RankingTabs from "./RankingTabs";

// Réutilisation des matches définis dans les stories SwissRoundElement
const swissRoundElementData = [
  {
    nbWin: 2,
    nbLoose: 1,
    matches: [
      {
        team1: "Team Alpha",
        team2: "Team Beta",
        scoreTeam1: 3,
        scoreTeam2: 2
      },
      {
        team1: "Team Alpha",
        team2: "Team Gamma",
        scoreTeam1: 1,
        scoreTeam2: 3
      },
      {
        team1: "Team Alpha",
        team2: "Team Delta",
        scoreTeam1: 3,
        scoreTeam2: 0
      }
    ]
  },
  {
    nbWin: 3,
    nbLoose: 0,
    matches: [
      {
        team1: "Team Omega",
        team2: "Team Sigma",
        scoreTeam1: 3,
        scoreTeam2: 1
      },
      {
        team1: "Team Omega",
        team2: "Team Epsilon",
        scoreTeam1: 3,
        scoreTeam2: 2
      },
      {
        team1: "Team Omega",
        team2: "Team Zeta",
        scoreTeam1: 3,
        scoreTeam2: 2
      }
    ]
  },
  {
    nbWin: 0,
    nbLoose: 3,
    matches: [
      {
        team1: "Team Mu",
        team2: "Team Nu",
        scoreTeam1: 1,
        scoreTeam2: 3
      },
      {
        team1: "Team Mu",
        team2: "Team Xi",
        scoreTeam1: 2,
        scoreTeam2: 3
      },
      {
        team1: "Team Mu",
        team2: "Team Omicron",
        scoreTeam1: 2,
        scoreTeam2: 3
      }
    ]
  }
];

// On construit un tournoi fictif avec ces données réparties en deux rounds
const sampleTournamentData = {
  roundList: [
    {
      round: [
        swissRoundElementData[0],
        swissRoundElementData[1]
      ]
    },
    {
      round: [swissRoundElementData[2]]
    }
  ]
};

const meta: Meta<typeof RankingTabs> = {
  title: "Components/RankingTabs",
  component: RankingTabs
};

export default meta;
type Story = StoryObj<typeof RankingTabs>;

export const Default: Story = {
  args: {
    tournamentData: sampleTournamentData
  }
};
