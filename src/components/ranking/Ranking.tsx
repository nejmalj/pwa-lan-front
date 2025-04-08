import './RankRow.scss'

export interface Rank {
    rank: number;
    équipe: string;
    win: number;
    loss: number;
  }
  
  export interface RankingProps {
    ranks: Rank[];
  }
  

function Ranking({ranks}: RankingProps) {

    return (
        <table>
            <thead>
                <tr>
                    <td>Place</td>
                    <td>Équipe</td>
                    <td>V</td>
                    <td>D</td>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    );
}

export default Ranking