import "./RankingTabs.scss";

import Ranking from "../ranking/Ranking";

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
  tournamentData: Tournament;
}

export default function RankingTabs({
  tournamentData
}: RankingTabsProps) {
  // "liste" pour le classement, "bracket" pour le swiss round bracket
  const [activeTab, setActiveTab] = useState<
    "liste" | "bracket"
  >("liste");

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
          className={
            activeTab === "bracket" ? "active" : ""
          }
          onClick={() => setActiveTab("bracket")}
        >
          Bracket
        </button>
      </div>
      <div className="tabs-content">
        {activeTab === "liste" && <Ranking />}
        {activeTab === "bracket" && (
          <SwissRoundBracket
            roundList={tournamentData.roundList}
          />
        )}
      </div>
    </div>
  );
}
