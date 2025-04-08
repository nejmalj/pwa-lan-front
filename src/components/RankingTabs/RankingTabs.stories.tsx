import type { Meta, StoryObj } from "@storybook/react";

import RankingTabs from "./RankingTabs";

// Exemple de données pour le classement
const sampleRankingData = [
  { rank: 1, équipe: "Team A", win: 10, loss: 2 },
  { rank: 2, équipe: "Team B", win: 9, loss: 3 },
  { rank: 3, équipe: "Team C", win: 8, loss: 4 },
];

// Exemple de données pour le bracket swiss round
// Ici, on suppose que SwissRoundElementsProps attend des matches de type { id: number; name: string; }[]
// Exemple corrigé de données pour le bracket swiss round
const sampleTournamentData = {
  roundList: [
    {
      round: [
        {
          nbWin: 2,
          nbLoose: 1,
          matches: [
            {
              id: 1,
              name: "Match A",
              team1: "Team A",
              team2: "Team B",
              scoreTeam1: 3,
              scoreTeam2: 2,
            },
          ],
        },
        {
          nbWin: 3,
          nbLoose: 0,
          matches: [
            {
              id: 2,
              name: "Match B",
              team1: "Team C",
              team2: "Team D",
              scoreTeam1: 1,
              scoreTeam2: 0,
            },
          ],
        },
      ],
    },
    {
      round: [
        {
          nbWin: 1,
          nbLoose: 2,
          matches: [
            {
              id: 3,
              name: "Match C",
              team1: "Team E",
              team2: "Team F",
              scoreTeam1: 2,
              scoreTeam2: 2,
            },
          ],
        },
        {
          nbWin: 2,
          nbLoose: 2,
          matches: [
            {
              id: 4,
              name: "Match D",
              team1: "Team G",
              team2: "Team H",
              scoreTeam1: 0,
              scoreTeam2: 1,
            },
          ],
        },
      ],
    },
  ],
};

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
