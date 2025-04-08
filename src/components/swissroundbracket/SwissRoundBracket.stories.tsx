import { Meta, StoryObj } from "@storybook/react";
import { SwissRoundBracket } from "./SwissRoundBracket";

const meta: Meta<typeof SwissRoundBracket> = {
    title: "Components/SwissRoundBracket",
    component: SwissRoundBracket,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SwissRoundBracket>;

export const Default: Story = {
    args: {
        roundList: [
            {
                round: [
                    {
                        nbWin: 1,
                        nbLoose: 0,
                        matches: [
                            {
                                team1: "Team Alpha",
                                team2: "Team Beta",
                                scoreTeam1: 16,
                                scoreTeam2: 12,
                            },
                        ],
                    },
                    {
                        nbWin: 0,
                        nbLoose: 1,
                        matches: [
                            {
                                team1: "Team Gamma",
                                team2: "Team Delta",
                                scoreTeam1: 9,
                                scoreTeam2: 16,
                            },
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
                            {
                                team1: "Team Alpha",
                                team2: "Team Delta",
                                scoreTeam1: 16,
                                scoreTeam2: 14,
                            },
                        ],
                    },
                    {
                        nbWin: 1,
                        nbLoose: 1,
                        matches: [
                            {
                                team1: "Team Beta",
                                team2: "Team Gamma",
                                scoreTeam1: 12,
                                scoreTeam2: 16,
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
