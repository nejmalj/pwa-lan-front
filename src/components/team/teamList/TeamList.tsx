import { Card } from "../../card/Card.tsx";
import TeamCard from "../teamCard/TeamCard.tsx";

export function TeamList() {
  const teams = [
    {
      teamName: "Team Alpha",
      members: [
        { name: "Lala", class: "MBA1 DFS", level: "Bronze" },
        { name: "Titi", class: "MBA1 DFS", level: "Diamond" },
      ],
    },
    {
      teamName: "Team Beta",
      members: [
        { name: "Toto", class: "B3 dev", level: "Gold" },
        { name: "Bibi", class: "B3 dev", level: "Platinum" },
      ],
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {teams.map((team, index) => (
        <Card key={index}>
          <TeamCard teamName={team.teamName} members={team.members} />
        </Card>
      ))}
    </div>
  );
}
