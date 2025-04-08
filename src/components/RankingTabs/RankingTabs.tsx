import "./RankingTabs.scss";

import Ranking, { Rank } from "../ranking/Ranking";

import { SwissRoundBracket } from "../swissroundbracket/SwissRoundBracket";
import { SwissRoundElementsProps } from "../swissroundbracket/swissroundelement/SwissRoundElement";
import { useState } from "react";

interface Tournament {
  roundList: Round[];
}

interface Round {
    round: SwissRoundElementsProps[];
}


export interface RankingTabsProps {
  rankingData: Rank[];
  tournamentData: Tournament;
}

export default function RankingTabs({ rankingData, tournamentData }: RankingTabsProps) {
  // "liste" pour le classement, "bracket" pour le swiss round bracket
  const [activeTab, setActiveTab] = useState<"liste" | "bracket">("liste");

  return (
    <div className="ranking-tabs">
      <div className="tabs-header">
        <button
          className={activeTab === "liste" ? "active" : ""}
          onClick={() => setActiveTab("liste")}
        >
          Classement
        </button>
        <button
          className={activeTab === "bracket" ? "active" : ""}
          onClick={() => setActiveTab("bracket")}
        >
          Swiss Round
        </button>
      </div>
      <div className="tabs-content">
        {activeTab === "liste" && <Ranking ranks={rankingData} />}
        {activeTab === "bracket" && <SwissRoundBracket roundList={tournamentData.roundList} />}
      </div>
    </div>
  );
}
