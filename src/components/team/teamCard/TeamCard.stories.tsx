import type { Meta, StoryObj } from "@storybook/react";
import TeamCard from "./TeamCard";

const meta: Meta<typeof TeamCard> = {
    title: "Components/TeamCard",
    component: TeamCard,
    tags: ["autodocs"],
    args: {
        teamName: "Dream Team",
        members: [
            { name: "Lala", class: "MBA1 DFS", level: "Gold" },
            { name: "Toto", class: "MBA2 DFS", level: "Platine" },
            { name: "Titi", class: "MBA1 DFS", level: "Silver" },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof TeamCard>;

export const Default: Story = {
    args: {
        teamName: "Dream Team",
        members: [
          { name: "Lala", class: "MBA1 DFS", level: "Gold" },
          { name: "Toto", class: "MBA2 DFS", level: "Platine" },
          { name: "Titi", class: "MBA1 DFS", level: "Silver" },
        ],
    },
};
