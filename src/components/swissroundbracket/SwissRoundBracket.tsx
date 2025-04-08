import {SwissRoundElementsProps} from "./swissroundelement/SwissRoundElement.tsx";

interface Round {
    round: SwissRoundElementsProps[];
}

interface Tournament {
    roundList: Round[];
}

export function SwissRoundBracket(props: Tournament) {
    const {roundList} = props

    return (
        <div className="swissRoundBracket">
            {roundList.map((round, index) => (
                <div key={index} className="round">
                    {round.round.map((element, index) => (
                        <div key={index} className="element">
                            <h2>{element.nbWin} - {element.nbLoose}</h2>
                            <div className="matches">
                                {element.matches.map((match, index) => (
                                    <div key={index} className="match">
                                        <div className="team1">{match.team1}</div>
                                        <div className="score">{match.scoreTeam1}</div>
                                        <div className="score">{match.scoreTeam2}</div>
                                        <div className="team2">{match.team2}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}