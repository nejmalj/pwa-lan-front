import { Card } from "../../card/Card.tsx";
import TeamCard from "../teamCard/TeamCard.tsx";

export function TeamList() {
  const teams = [
    {
      teamName: "Team Alpha",
      members: [
        { name: "Alice", class: "Warrior", level: "Bronze" },
        { name: "Bob", class: "Mage", level: "Diamond" },
      ],
    },
    {
      teamName: "Team Beta",
      members: [
        { name: "Charlie", class: "Rogue", level: "Gold" },
        { name: "Dana", class: "Healer", level: "Platinum" },
      ],
    },
  ];

  return (
    <div>
      {teams.map((team, index) => (
        <Card key={index}>
          <TeamCard teamName={team.teamName} members={team.members} />
        </Card>
      ))}
    </div>
  );
}
