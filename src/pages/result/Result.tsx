import Ranking from "../../components/ranking/Ranking.tsx";
import {SwissRoundBracket} from "../../components/swissroundbracket/SwissRoundBracket.tsx";
import {TabItem, Tabs} from "../../components/tabs/tabs.tsx";


function Result() {
    const roundList = [
        // ROUND 1 — Tout le monde à 0-0
        {
            round: [
                {
                    nbWin: 0,
                    nbLoose: 0,
                    matches: [
                        {team1: "Team Alpha", team2: "Team Beta", scoreTeam1: 3, scoreTeam2: 1},
                        {team1: "Team Gamma", team2: "Team Delta", scoreTeam1: 2, scoreTeam2: 3},
                        {team1: "Team Echo", team2: "Team Fox", scoreTeam1: 0, scoreTeam2: 3},
                        {team1: "Team Hydra", team2: "Team Joker", scoreTeam1: 3, scoreTeam2: 2},
                    ],
                },
            ],
        },
        // ROUND 2 — 1-0 vs 1-0 et 0-1 vs 0-1
        {
            round: [
                {
                    nbWin: 1,
                    nbLoose: 0,
                    matches: [
                        {team1: "Team Alpha", team2: "Team Delta", scoreTeam1: 3, scoreTeam2: 2},
                        {team1: "Team Fox", team2: "Team Hydra", scoreTeam1: 1, scoreTeam2: 3},
                    ],
                },
                {
                    nbWin: 0,
                    nbLoose: 1,
                    matches: [
                        {team1: "Team Beta", team2: "Team Gamma", scoreTeam1: 2, scoreTeam2: 3},
                        {team1: "Team Echo", team2: "Team Joker", scoreTeam1: 3, scoreTeam2: 0},
                    ],
                },
            ],
        },
        // ROUND 3 — 2-0 vs 2-0, 1-1 vs 1-1, 0-2 vs 0-2
        {
            round: [
                {
                    nbWin: 2,
                    nbLoose: 0,
                    matches: [
                        {team1: "Team Alpha", team2: "Team Hydra", scoreTeam1: 2, scoreTeam2: 3},
                    ],
                },
                {
                    nbWin: 1,
                    nbLoose: 1,
                    matches: [
                        {team1: "Team Delta", team2: "Team Fox", scoreTeam1: 3, scoreTeam2: 1},
                        {team1: "Team Gamma", team2: "Team Echo", scoreTeam1: 1, scoreTeam2: 3},
                    ],
                },
                {
                    nbWin: 0,
                    nbLoose: 2,
                    matches: [
                        {team1: "Team Beta", team2: "Team Joker", scoreTeam1: 0, scoreTeam2: 3},
                    ],
                },
            ],
        },
    ]
    const fakeData = [
        {
            rank: 1,
            équipe: "Les top 1",
            win: 11,
            loss: 0
        },
        {
            rank: 2,
            équipe: "Les top 2",
            win: 10,
            loss: 1
        },
        {
            rank: 3,
            équipe: "Les top 3",
            win: 9,
            loss: 2
        },
        {
            rank: 4,
            équipe: "Les top 4",
            win: 8,
            loss: 3
        },
        {
            rank: 5,
            équipe: "Les top 5",
            win: 7,
            loss: 4
        }
    ];
    const tabsItems: TabItem[] = [
        {label: "Classement", content: <Ranking ranks={fakeData}/>},
        {label: "Bracket", content: <SwissRoundBracket roundList={roundList}/>},
    ]

    return (
        <div className="resultContainer">
            <h1>Résultats</h1>
            <Tabs items={tabsItems}/>
        </div>
    )
}

export default Result;