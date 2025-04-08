import type { Meta, StoryObj } from "@storybook/react";
import TeamCard from "./TeamCard";

const meta: Meta<typeof TeamCard> = {
    title: "Components/TeamCard",
    component: TeamCard,
    tags: ["autodocs"],
    args: {
        teamName: "Dream Team",
        players: [
            { name: "Lala", promoName: "MBA DFS", levelName: "Bronze" },
            { name: "Toto", promoName: "MBA DFS", levelName: "Bronze" },
            { name: "Titi", promoName: "MBA DFS", levelName: "Bronze" },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof TeamCard>;

export const Default: Story = {
    args: {
        teamName: "Dream Team",
        players: [
          { name: "Lala", promoName: "MBA DFS", levelName: "Bronze" },
          { name: "Toto", promoName: "MBA DFS", levelName: "Bronze" },
          { name: "Titi", promoName: "MBA DFS", levelName: "Bronze" },
        ],
    },
};
