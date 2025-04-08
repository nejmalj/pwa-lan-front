import RankRow from "../rank-row/RankRow";
import "./Ranking.scss";

export interface Rank {
  rank: number;
  équipe: string;
  win: number;
  loss: number;
}

export interface RankingProps {
  ranks: Rank[];
}

function Ranking({ ranks }: RankingProps) {
  return (
    <table className="resultsTable">
      <thead>
        <tr>
          <td>Place</td>
          <td>Équipe</td>
          <td>V</td>
          <td>
            D <div></div>
          </td>
        </tr>
      </thead>
      <tbody>
        {ranks.map((rankItem) => (
          <RankRow
            key={rankItem.rank}
            ranking={rankItem.rank}
            team={rankItem.équipe}
            win={rankItem.win}
            loss={rankItem.loss}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Ranking;
