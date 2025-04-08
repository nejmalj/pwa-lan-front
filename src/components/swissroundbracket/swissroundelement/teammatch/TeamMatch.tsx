import {Matches} from "../SwissRoundElement.tsx";
import "./TeamMatch.scss";

export default function TeamMatch(match: Matches) {
    return (
        <div className="teamMatch">
            <div className="team1">
                <div className="team1name">
                    {match.team1}
                </div>
                 <div className="team1score">
                     {match.scoreTeam1}
                 </div>
            </div>
            <div className="team2">
                <div className="team2score">
                    {match.scoreTeam2}
                </div>
                <div className="team2name">
                    {match.team2}
                </div>
            </div>
        </div>
    )
}