import type { Meta, StoryObj } from "@storybook/react";
import TeamCard from "./TeamCard";

const meta: Meta<typeof TeamCard> = {
    title: "Components/TeamCard",
    component: TeamCard,
    tags: ["autodocs"],
    args: {
        teamName: "Dream Team",
        members: [
            { name: "Dylan", class: "Développeur/dépressif", level: "noob" },
            { name: "Louise", class: "Développeuse/UX", level: "Ça roule" },
            { name: "Nejma", class: "Développeuse des fois", level: "On est là" },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof TeamCard>;

export const Default: Story = {
    args: {
        teamName: "Dream Team",
        members: [
            { name: "Dylan", class: "Développeur/dépressif", level: "noob" },
            { name: "Louise", class: "Développeuse/UX", level: "Ça roule" },
            { name: "Nejma", class: "Développeuse des fois", level: "On est là" },
        ],
    },
};
