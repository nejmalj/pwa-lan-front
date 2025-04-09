// import "./RankingTabs.scss";

//DYLAN EST UN LOOSER

import Ranking, { Rank } from "../ranking/Ranking";
import { TabItem, Tabs } from "../tabs/tabs";

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
  const tabItems: TabItem[] = [
    { label: "Classement", content: <Ranking ranks={rankingData} /> },
    { label: "Bracket", content: <SwissRoundBracket roundList={tournamentData.roundList} /> },
  ];

  return (
    <div className="ranking-tabs">
      <Tabs items={tabItems} />
    </div>
  );
}
