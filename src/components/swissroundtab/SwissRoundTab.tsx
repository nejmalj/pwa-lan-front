import { useCallback } from "react";
import "./SwissRoundTab.scss";

interface GameHistory {
  opponent: string;
  result: "win" | "lose";
}

interface TeamAndScore {
  teamName: string;
  gamesHistory: GameHistory[];
}

export interface SwissRoundTabProps {
  teamAndScores: TeamAndScore[];
}

export default function SwissRoundTab({
  teamAndScores
}: SwissRoundTabProps) {
  useCallback(() => {
    teamAndScores.sort((a, b) => {
      if (
        a.gamesHistory.filter(
          (game) => game.result === "win"
        ).length >
        b.gamesHistory.filter(
          (game) => game.result === "win"
        ).length
      ) {
        return -1;
      } else if (
        a.gamesHistory.filter(
          (game) => game.result === "win"
        ).length <
        b.gamesHistory.filter(
          (game) => game.result === "win"
        ).length
      ) {
        return 1;
      } else {
        if (
          a.gamesHistory.filter(
            (game) => game.result === "lose"
          ).length <
          b.gamesHistory.filter(
            (game) => game.result === "lose"
          ).length
        ) {
          return -1;
        } else if (
          a.gamesHistory.filter(
            (game) => game.result === "lose"
          ).length >
          b.gamesHistory.filter(
            (game) => game.result === "lose"
          ).length
        ) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  }, [teamAndScores]);

  const maxRounds = Math.max(
    ...teamAndScores.map((team) => team.gamesHistory.length)
  );

  return (
    <div className="swissRoundTab">
      <table>
        <thead>
          <tr>
            <th>Nom d'équipe</th>
            <th>Score</th>
            {Array.from({ length: maxRounds }, (_, i) => (
              <th key={i}>Round {i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teamAndScores.map((teamAndScore, index) => {
            return (
              <tr key={index}>
                <td>{teamAndScore.teamName}</td>
                <td>
                  {teamAndScore.gamesHistory.filter(
                    (game) => game.result === "win"
                  ).length +
                    "-" +
                    teamAndScore.gamesHistory.filter(
                      (game) => game.result === "lose"
                    ).length}
                </td>
                {teamAndScore.gamesHistory.map(
                  (game, index) => (
                    <td key={index}>
                      {game.result === "win" ? "✅" : "❌"}{" "}
                      vs {game.opponent}
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
